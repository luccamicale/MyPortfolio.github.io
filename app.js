const hamburger = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.menu-main');
const cancel = document.querySelector('.cancel');
const linkss = document.querySelectorAll('.menu-cancel');

hamburger.addEventListener('click', () => {
  overlay.style.display = 'flex';
  mainMenu.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i < linkss.length; i += 1) {
  linkss[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}

//-- start with the popup window --//

const projects = [
    {
      projectId: 'project-1',
      projectName: 'Tonic',
      projectClasses: [
        'CANOPY',
        '• Back End Dev',
        '• 2015',
      ],
      projectImage: './images/Time.jpg',
      languages: [
        'CSS',
        'HTML',
        'Bootsrap',
        'Ruby',
        'GitHub',
        'Javascript',
      ],
      liveLink: 'https://github.com/luccamicale',
      sourceLink: 'https://github.com/luccamicale/myportfolio.github.io',
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
    },
    {
      projectId: 'project-2',
      projectName: 'My Post Stories',
      projectClasses: [
        'CANOPY',
        '• Back End Dev',
        '• 2015',
        ],
      projectImage: './images/SnapshootPortfolio(2).jpg',
      languages: [
        'CSS',
        'HTML',
        'Bootsrap',
        'Ruby',
        'GitHub',
        'Javascript',
        ],
      liveLink: 'https://github.com/luccamicale',
      sourceLink: 'https://github.com/luccamicale/myportfolio.github.io',
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
    },
    {
        projectId: 'project-3',
        projectName: 'Tonic 2',
        projectClasses: [
          'CANOPY',
          '• Back End Dev',
          '• 2015',
        ],
        projectImage: './images/SnapshootPortfolio(2).jpg',
        languages: [
          'CSS',
          'HTML',
          'Bootsrap',
          'Ruby',
          'GitHub',
          'Javascript',
        ],
        liveLink: 'https://github.com/luccamicale',
        sourceLink: 'https://github.com/luccamicale/myportfolio.github.io',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
    },

    {
        projectId: 'project-4',
        projectName: 'My Post Stories 2',
        projectClasses: [
          'CANOPY',
          '• Back End Dev',
          '• 2015',
        ],
        projectImage: './images/SnapshootPortfolio(2).jpg',
        languages: [
          'CSS',
          'HTML',
          'Bootsrap',
          'Ruby',
          'GitHub',
          'Javascript',
        ],
        liveLink: 'https://github.com/luccamicale',
        sourceLink: 'https://github.com/luccamicale/myportfolio.github.io',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
    },
]
   
    document.getElementById('button-see').addEventListener('click', () => {
        document.getElementById('modal-container').style.display = 'block';
        document.getElementById('project-name1').textContent= projects[0].projectName;
        document.getElementById('canopy-modal1').textContent= projects[0].projectClasses[0];
        document.getElementById('back-modal1').textContent= projects[0].projectClasses[1];
        document.getElementById('year-modal1').textContent= projects[0].projectClasses[2];
        document.getElementById('project-image').src= projects[0].projectImage;
        document.getElementById('html-modal1').textContent= projects[0].languages[0];
        document.getElementById('css-modal1').textContent= projects[0].languages[1];
        document.getElementById('bootstrap-moda1l').textContent= projects[0].languages[2];
        document.getElementById('ruby-modal1').textContent= projects[0].languages[3];
        document.getElementById('java-modal1').textContent= projects[0].languages[4];
        document.getElementById('github-modal1').textContent= projects[0].languages[5];
        document.getElementById('live-link1').textContent= projects[0].liveLink[0];
        document.getElementById('source-link').textContent= projects[0].sourceLink[0];
        document.getElementById('modal-description').textContent= projects[0].description[0];
    });

    document.getElementById('modal-close').addEventListener('click', () => {
        document.getElementById('modal-container').style.display = 'none';
      });
