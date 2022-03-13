const nameProject = document.querySelector('.name-line');
const projectDescription = document.querySelector('.project-description');
const projectLink = document.querySelector('.project-href');
const projectCard = document.getElementById('arrow-container');

const projects = [
  {
    name: 'First attempt at personal page.',
    description: 'Simple page with basic HTML & CSS',
    link: 'https://newbie814.github.io/cv-update/',
  },
  {
    name: 'Commercial sales page',
    description:
      'HTML, CSS, Bootstrap. I was following a tutorial. This was a challenge, as a lot of the technologies used were deprecated. I had to research a lot for workarounds.',
    link: 'https://newbie814.github.io/tindog-lesson2/',
  },
  {
    name: 'High Roll Wins.',
    description:
      'Simple game based on a random number generator in Javascript. Simple. But, my 3 year old loved it.',
    link: 'https://newbie814.github.io/mama_connor_dice/',
  },
  {
    name: "Connor's Drum Kit",
    description: 'Practice with DOM, event listeners, and switch/case',
    link: 'https://newbie814.github.io/udemy-drumkit-project/',
  },
  {
    name: 'Simon Game',
    description:
      'More practice with event listeners, arrays, and array methods.',
    link: 'https://newbie814.github.io/simon-game-challenge/',
  },
  {
    name: 'Father and son',
    description: 'Hidden search widget. ish.',
    link: ' https://newbie814.github.io/hiddenish-search-widget/',
  },
  {
    name: 'Expanding photo cards',
    description:
      'More event listeners. Learning to use JavaScript to add and remove classes',
    link: 'https://newbie814.github.io/exp-attempt-3/',
  },
  {
    name: 'Lil Dude changing a tire',
    description: 'Full photo background with blur to focus animation',
    link: 'https://newbie814.github.io/blur-load/',
  },
  {
    name: 'Carousel carouselling',
    description: 'Spinning and separating photo animation',
    link: 'https://newbie814.github.io/connor-carousel-3d-squares/',
  },
  {
    name: 'MJ Thomas Art E-commerce site',
    description:
      'Fully functioning. Pay system is in sandbox mode. Built with HTML, CSS, React, Bootstrap, Redux, NodeJS, JavaScript MongoDB, Mongoose, Atlas, Postman, PayPal API. Deployed and hosted on Heroku.',
    link: 'https://mjthomasart.herokuapp.com/',
  },
  {
    name: 'Portfolio',
    description:
      'Built on Codesandbox. Deployed via CS through Netlify. Domain is from Google.',
    link: 'http://www.matthew-woodard.com/',
  },
  {
    name: 'Verification Code',
    description: 'Simple UI screen for inputting 2FA code',
    link: 'https://newbie814.github.io/2fa-ui-screen/',
  },
  {
    name: 'Search Filter',
    description: 'Simple filter to search users',
    link: 'https://newbie814.github.io/live-feed-user-filter',
  },
  {
    name: 'Personal Training Website',
    description: "My own personal site. It's a work in progress.",
    link: 'https://newbie814.github.io/personal-training-page/',
  },
];

let index = 1;

// function flipThroughCards()

document
  .getElementById('arrow-container')
  .addEventListener('click', function () {
    {
      const { name, description, link } = projects[index];

      nameProject.innerHTML = name;
      projectDescription.innerHTML = description;
      projectLink.innerHTML = link;
      projectLink.setAttribute('href', link);

      index++;

      if (index > projects.length - 1) {
        index = 0;
      }
    }
  });
