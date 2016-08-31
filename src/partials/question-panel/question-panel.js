const questions = [
  {
    "title": "Hoelang waren Pieter de Clercq en Agatha Stockelaar getrouwd ten tijde van dit portret?",
    "description": "",
    "reward": "pieter-de-clercq",
    "answers": [
      {
        "content": "12.5 jaar"
      },
      {
        "content": "5 jaar"
      },
      {
        "content": "1 jaar",
        "correct": true
      },
      {
        "content": "3 maanden"
      }
    ]
  },
  {
    "title": "Van welke provincies had Prins Maurits de belangrijkste steden ingenomen?",
    "description": "",
    "reward": "prince-maurits",
    "answers": [
      {
        "content": "Groningen en Friesland"
      },
      {
        "content": "Noord en Zuid Holland"
      },
      {
        "content": "Gelderland en Overijssel",
        "correct": true
      },
      {
        "content": "Brabant en Limburg"
      }
    ]
  },
  {
    "title": "Wat voor afbeelding had Phillips II op zijn harnas als blijk van zijn gelovigheid?",
    "description": "",
    "reward": "phillips-II",
    "answers": [
      {
        "content": "Een Madonna",
        "correct": true
      },
      {
        "content": "Een kruis"
      },
      {
        "content": "Portret van Jezus Christus"
      },
      {
        "content": "De heilige graal"
      }
    ]
  },
  {
    "title": "Waar verhuisde de Chirurgijnsgilde heen in 1619?",
    "description": "",
    "reward": "skeleton",
    "answers": [
      {
        "content": "Rembrandtplein"
      },
      {
        "content": "Nieuwmarkt",
        "correct": true
      },
      {
        "content": "De Dam"
      },
      {
        "content": "Waterlooplein"
      }
    ]
  },
  {
    "title": "Tegen wie vocht Jan van Speyk toen hij zichzelf en zijn schip opblies?",
    "description": "",
    "reward": "jan-van-speyk",
    "answers": [
      {
        "content": "De Belgen",
        "correct": true
      },
      {
        "content": "De Spanjaarden"
      },
      {
        "content": "De Engelsen"
      },
      {
        "content": "De Fransen"
      }
    ]
  },
  {
    "title": "Waarom weigerde Koning Radbout de doop?",
    "description": "",
    "reward": "king-radbout",
    "answers": [
      {
        "content": "Hij vond dat het christendom corrupt was"
      },
      {
        "content": "Zijn volk wilde het christendom niet accepteren"
      },
      {
        "content": "Hij vond het doopwater te koud"
      },
      {
        "content": "Zijn voorvaderen mochten niet naar de hemel",
        "correct": true
      }
    ]
  },
  {
    "title": "Wie stelde Oldenbarnevelt aan om tegenwicht voor de graaf van Leicester te creëeren?",
    "description": "",
    "reward": "oldenbarnevelt",
    "answers": [
      {
        "content": "Johan de Witt"
      },
      {
        "content": "Willem van Oranje"
      },
      {
        "content": "Prins Maurits",
        "correct": true
      },
      {
        "content": "Robert Dudley"
      }
    ]
  },
  {
    "title": "Hoe lang duurde het om een kanon te laden?",
    "description": "",
    "reward": "warship",
    "answers": [
      {
        "content": "30 seconden",
        "correct": true
      },
      {
        "content": "60 seconden"
      },
      {
        "content": "120 seconden"
      },
      {
        "content": "180 seconden"
      }
    ]
  },
  {
    "title": "Waar stonden de paauw en de uil symbool voor?",
    "description": "",
    "reward": "pauw",
    "answers": [
      {
        "content": "Ijdelheid en wijsheid",
        "correct": true
      },
      {
        "content": "Liefde en vriendschap"
      },
      {
        "content": "Trots en vrijheid"
      },
      {
        "content": "Broederschap en gelijkheid"
      }
    ]
  },
  {
    "title": "Waar stonden de paauw en de uil symbool voor?",
    "description": "",
    "reward": "owl",
    "answers": [
      {
        "content": "Ijdelheid en wijsheid",
        "correct": true
      },
      {
        "content": "Liefde en vriendschap"
      },
      {
        "content": "Trots en vrijheid"
      },
      {
        "content": "Broederschap en gelijkheid"
      }
    ]
  },
  {
    "title": "Door wie is Willem van Oranje vermoord?",
    "description": "",
    "reward": "willem-van-oranje",
    "answers": [
      {
        "content": "Berend Zwartjes"
      },
      {
        "content": "Johan de Witt"
      },
      {
        "content": "Balthazar Geraerts",
        "correct": true
      },
      {
        "content": "Florentius Wibaut"
      }
    ]
  },
  {
    "title": "Wat heeft Willem III in zijn hand?",
    "description": "",
    "reward": "willem-III",
    "answers": [
      {
        "content": "Oud geschrift"
      },
      {
        "content": "Telescoop"
      },
      {
        "content": "Commandostaf",
        "correct": true
      },
      {
        "content": "Wandelstok"
      }
    ]
  },
  {
    "title": "In welk jaar kwam de koepel op het stadhuis?",
    "description": "",
    "reward": "city-building",
    "answers": [
      {
        "content": "1665",
        "correct": true
      },
      {
        "content": "1631"
      },
      {
        "content": "1672"
      },
      {
        "content": "1661"
      }
    ]
  },
  {
    "title": "Tegen wie streed Reinier Claeszen toen hij stierf?",
    "description": "",
    "reward": "reinier-claeszen",
    "answers": [
      {
        "content": "De Engelsen",
        "correct": true
      },
      {
        "content": "De Portugezen"
      },
      {
        "content": "De Spanjaarden",
        "correct": true
      },
      {
        "content": "De Fransen"
      }
    ]
  }
];

const questionTitle = document.querySelector('[data-question-title]');
const questionAnswers = document.querySelector('[data-question-answers]');
var paintingInventory = document.querySelector('[data-painting-inventory]');
var question;

const randomQuestion = function () {
  var randomIndex = Math.floor(Math.random() * (questions.length + 1));
  question = questions[randomIndex];

  questionTitle.textContent = question.title;

  for (var i = 0; i < questionAnswers.children.length; i += 1) {
    var answer = question.answers[i];
    var answerElement = questionAnswers.children[i];

    answerElement.textContent = answer.content;

    if (answer.correct) {
      answerElement.setAttribute('data-question-correct', true);
    } else {
      answerElement.setAttribute('data-question-correct', false);
    }
  }
};

const initAnswers = function () {
  for (var i = 0; i < questionAnswers.children.length; i += 1) {
    var node = questionAnswers.children[i];

    node.addEventListener('click', function (event) {
      if (event.target.getAttribute('data-question-correct') === 'true') {
        var image = document.createElement('img');
        image.setAttribute('src', `paintings/${question.reward}.png`);

        paintingInventory.appendChild(image);

        alert('Dat klopt! Je hebt een stuk schilderij verdient.');
        // Open the inventory
        window.location.hash = '';
        setTimeout(function () {
          window.location.hash = 'inventory';
        }, 100);
      } else {
        alert('Helaas dat klopt niet.');
        // Close the question panel
        window.location.hash = '';
      }
    });
  }

  randomQuestion();
};

initAnswers();
