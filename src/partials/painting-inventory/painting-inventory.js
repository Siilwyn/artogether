(function () {
  const paintingCanvas = document.querySelector('[data-painting-canvas]');
  const paintingInventory = document.querySelector('[data-painting-inventory]');

  paintingInventory.addEventListener('click', function (event) {
    const painting = event.target;
    Hammer.defaults.domEvents = true;

    // Prevent default browser image handling
    painting.ondragstart = function(event) {
      event.preventDefault();
    };

    addHammerInteraction(painting);

    // Add the painting to the canvas
    paintingCanvas.appendChild(painting);
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
    });

    manager.on('panend pinchend', function () {
      element.classList.remove('selected');
    });
  };
})();
