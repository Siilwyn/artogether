(function () {
  const backgroundToggler = document.querySelector('[data-toggle-background]');
  backgroundToggler.addEventListener('click', function () {
    if (window.location.hash == '#background') {
      window.location.hash = '';
    } else {
      window.location.hash = '#background';
    }
  });

  const backgroundOptions = document.querySelector('[data-background-options]');
  var selectedOption = document.querySelector('[data-background-default]');

  // Prevent default browser image handling
  backgroundOptions.ondragstart = function(event) {
    event.preventDefault();
  };

  const manager = new Hammer.Manager(backgroundOptions);
  const Pan = new Hammer.Pan();
  const Tap = new Hammer.Tap();

  manager.add(Pan);
  manager.add(Tap);

  backgroundOptions.hammerProperties = {
    deltaX: 0
  };

  manager.on('tap', function (event) {
    selectedOption.classList.remove('selected');
    selectedOption = event.target;

    selectedOption.classList.add('selected');

    socket.emit('change background', selectedOption.src);
  });

  socket.on('change background', function (url) {
    document.body.style.backgroundImage = `url(\'${url}\')`;
  });

  manager.on('panmove', function (event) {

    var dX = backgroundOptions.hammerProperties.deltaX + (event.deltaX);

    backgroundOptions.style.transform = `translateX(${dX}px)`;
  });

  manager.on('panend', function (event) {
    backgroundOptions.hammerProperties.deltaX += event.deltaX;
  });

})();
