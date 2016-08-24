(function () {
  window.onhashchange = function () {
    const paintingInventoryContainer = document.querySelector('[data-painting-inventory-container]');
    const questionPanel = document.querySelector('[data-question-panel]');
    const backgroundPanel = document.querySelector('[data-background-panel]');

    switch(window.location.hash) {
      case '#inventory':
        paintingInventoryContainer.classList.add('active');
        break;
      case '#question':
        questionPanel.classList.add('active');
        randomQuestion();
        break;
      case '#background':
        backgroundPanel.classList.add('active');
        break;
      default:
        paintingInventoryContainer.classList.remove('active');
        questionPanel.classList.remove('active');
        backgroundPanel.classList.remove('active');
    }
  };
})();
