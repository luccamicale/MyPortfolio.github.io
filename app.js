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
      projectImage: './images/SnapshootPortfolio(2).jpg',
      languages: [
        'CSS',
        'HTML',
        'Bootsrap',
        'Ruby',
        'GitHub',
        'Javascript',
      ],
      liveLink: 'See Live',
      sourceLink: 'See Source',
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
        projectImage: './images/Snapshoot123Portfolio.png',
        languages: [
          'CSS',
          'HTML',
          'Bootsrap',
          'Ruby',
          'GitHub',
          'Javascript',
        ],
        liveLink: 'See Live',
        sourceLink: 'See Source',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
      },
      {
        projectId: 'project-3',
        projectName: 'Tonic',
        projectClasses: [
          'CANOPY',
          '• Back End Dev',
          '• 2015',
        ],
        projectImage: './images/SnapshootPortfolio77.jpg',
        languages: [
          'CSS',
          'HTML',
          'Bootsrap',
          'Ruby',
          'GitHub',
          'Javascript',
        ],
        liveLink: 'See Live',
        sourceLink: 'See Source',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
      },
      {
        projectId: 'project-4',
        projectName: 'My Post stories',
        projectClasses: [
          'CANOPY',
          '• Back End Dev',
          '• 2015',
        ],
        projectImage: './images/SnapshootPortfolio2).jpg',
        languages: [
          'CSS',
          'HTML',
          'Bootsrap',
          'Ruby',
          'GitHub',
          'Javascript',
        ],
        liveLink: 'See Live',
        sourceLink: 'See Source',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
      },
]
   
    document.getElementById('button-see').addEventListener('click', () => {
      document.getElementById('modal-container').style.display = 'block';
      document.getElementById('project-name').textContent = projects[0].projectName;
      document.getElementById('canopy-modal').textContent= projects[0].projectClasses[0];
      document.getElementById('back-modal').textContent = projects[0].projectClasses[1];
      document.getElementById('year-modal').textContent = projects[0].projectClasses[2];
      document.getElementById('project-image').src = projects[0].projectImage;
      document.getElementById('html-modal').textContent = projects[0].languages[0];
      document.getElementById('css-modal').textContent = projects[0].languages[1];
      document.getElementById('bootstrap-moda1').textContent = projects[0].languages[2];
      document.getElementById('ruby-modal').textContent = projects[0].languages[3];
      document.getElementById('java-modal').textContent = projects[0].languages[4];
      document.getElementById('github-modal').textContent = projects[0].languages[5];
      document.getElementById('live-link1').textContent = projects[0].liveLink[0];
      document.getElementById('source-link1').textContent = projects[0].sourceLink[0];
      document.getElementById('modal-description').textContent = projects[0].description[0];
    });
    document.getElementById('button-see-two').addEventListener('click', () => {
      document.getElementById('modal-container').style.display = 'block';
      document.getElementById('project-name').textContent = projects[1].projectName;
      document.getElementById('canopy-modal').textContent = projects[1].projectClasses[0];
      document.getElementById('back-modal').textContent = projects[1].projectClasses[1];
      document.getElementById('year-modal').textContent = projects[1].projectClasses[2];
      document.getElementById('project-image').src = projects[1].projectImage;
      document.getElementById('html-modal').textContent = projects[1].languages[0];
      document.getElementById('css-modal').textContent = projects[1].languages[1];
      document.getElementById('bootstrap-moda1').textContent = projects[1].languages[2];
      document.getElementById('ruby-modal').textContent = projects[1].languages[3];
      document.getElementById('java-modal').textContent = projects[1].languages[4];
      document.getElementById('github-modal').textContent = projects[1].languages[5];
      document.getElementById('live-link1').textContent = projects[1].liveLink[0];
      document.getElementById('source-link1').textContent = projects[1].sourceLink[0];
      document.getElementById('modal-description').textContent = projects[1].description[0];
    });
    document.getElementById('button-tonic-3').addEventListener('click', () => {
      document.getElementById('modal-container').style.display = 'block';
      document.getElementById('project-name').textContent = projects[2].projectName;
      document.getElementById('canopy-modal').textContent = projects[2].projectClasses[0];
      document.getElementById('back-modal').textContent = projects[2].projectClasses[1];
      document.getElementById('year-modal').textContent = projects[2].projectClasses[2];
      document.getElementById('project-image').src= projects[2].projectImage;
      document.getElementById('html-modal').textContent = projects[2].languages[0];
      document.getElementById('css-modal').textContent = projects[2].languages[1];
      document.getElementById('bootstrap-moda1').textContent = projects[2].languages[2];
      document.getElementById('ruby-modal').textContent = projects[2].languages[3];
      document.getElementById('java-modal').textContent = projects[2].languages[4];
      document.getElementById('github-modal').textContent = projects[2].languages[5];
      document.getElementById('live-link').textContent = projects[2].liveLink[0];
      document.getElementById('source-link').textContent = projects[2].sourceLink[0];
      document.getElementById('modal-description').textContent = projects[2].description[0];
    });
    document.getElementById('button-see-mypost').addEventListener('click', () => {
      document.getElementById('modal-container').style.display = 'block';
      document.getElementById('project-name').textContent = projects[3].projectName;
      document.getElementById('canopy-modal').textContent = projects[3].projectClasses[0];
      document.getElementById('back-modal').textContent = projects[3].projectClasses[1];
      document.getElementById('year-modal').textContent = projects[3].projectClasses[2];
      document.getElementById('project-image').src = projects[3].projectImage;
      document.getElementById('html-modal').textContent = projects[3].languages[0];
      document.getElementById('css-modal').textContent = projects[3].languages[1];
      document.getElementById('bootstrap-moda1').textContent = projects[3].languages[2];
      document.getElementById('ruby-modal').textContent = projects[3].languages[3];
      document.getElementById('java-modal').textContent = projects[3].languages[4];
      document.getElementById('github-modal').textContent = projects[3].languages[5];
      document.getElementById('live-link1').textContent = projects[3].liveLink[0];
      document.getElementById('source-link1').textContent = projects[3].sourceLink[0];
      document.getElementById('modal-description').textContent = projects[3].description[0];
    });

    document.getElementById('modal-close').addEventListener('click', () => {
      document.getElementById('modal-container').style.display = 'none';
      });
