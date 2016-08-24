const updateDomHack = function () {
  const domHackContainer = document.querySelector('[update-dom-hack]');
  const emptySpan = document.createElement('span');

  domHackContainer.appendChild(emptySpan);

  setTimeout(function () {
    domHackContainer.querySelector('span').remove();
  }, 100);
};
