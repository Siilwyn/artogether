const paintingCanvas = document.querySelector('[data-painting-canvas]');
var paintingInventory = document.querySelector('[data-painting-inventory]');

var socket = io();

paintingInventory.addEventListener('click', function (event) {
  // Add the painting to the canvas
  socket.emit('add painting', {
    src: event.target.getAttribute('src')
  });

  // Remove the painting from the inventory
  paintingInventory.removeChild(event.target);

  // Close the inventory
  window.location.hash = '';
});

const addHammerInteraction = function (element) {
  const manager = new Hammer.Manager(element);
  const Pan = new Hammer.Pan();
  const Pinch = new Hammer.Pinch();

  manager.add(Pan);
  manager.add(Pinch);

  element.hammerProperties = {
    deltaX: 0,
    deltaY: 0,
    scale: 1
  };

  manager.on('panstart', function (event) {
    paintingCanvas.appendChild(event.target);
  });

  manager.on('panend', function (event) {
    element.hammerProperties.deltaX += event.deltaX;
    element.hammerProperties.deltaY += event.deltaY;

    updateDomHack();
  });

  manager.on('pinchend', function (event) {
    // cache the scale
    element.hammerProperties.scale = event.scale * element.hammerProperties.scale;
  });

  manager.on('panmove pinchmove', function (event) {
    element.classList.add('selected');

    var dX = element.hammerProperties.deltaX + (event.deltaX);
    var dY = element.hammerProperties.deltaY + (event.deltaY);
    var scale = event.scale * element.hammerProperties.scale;

    element.style.transform = `translate(${dX}px, ${dY}px) scale(${scale})`;

    socket.emit('move painting', {
      id: element.getAttribute('id'),
      transform: element.style.transform
    });
  });

  manager.on('panend pinchend', function () {
    element.classList.remove('selected');
  });
};

socket.on('add painting', function (paintingData) {
  var painting = document.createElement('img');
  painting.setAttribute('src', paintingData.src);
  painting.setAttribute('id', paintingData.id);

  // Prevent default browser image handling
  painting.ondragstart = function (event) {
    event.preventDefault();
  };

  addHammerInteraction(painting);

  paintingCanvas.appendChild(painting);
});

socket.on('move painting', function (paintingData) {
  var painting = document.getElementById(paintingData.id);
  painting.style.transform = paintingData.transform;
});
