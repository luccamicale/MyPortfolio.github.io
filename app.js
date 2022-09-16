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

const projects = [
  {
    projectId: 'project-1',
    projectName: 'Tonic',
    projectClasses1: 'CANOPY',
    projectClasses2: '• Back End Dev',
    projectClasses3: '• 2015',
    projectImage: './images/SnapshootPortfolio(2).jpg',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/iconGitHub.png',
    languages1: 'CSS',
    languages2: 'HTML',
    languages3: 'Bootsrap',
    languages4: 'Ruby',
    languages5: 'GitHub',
    languages6: 'Javascript',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  },
  {
    projectId: 'project-2',
    projectName: 'My Post Stories',
    projectClasses1: 'CANOPY',
    projectClasses2: '• Back End Dev',
    projectClasses3: '• 2015',
    projectImage: './images/Snapshoot123Portfolio.png',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/iconGitHub.png',
    languages1: 'CSS',
    languages2: 'HTML',
    languages3: 'Bootsrap',
    languages4: 'Ruby',
    languages5: 'GitHub',
    languages6: 'Javascript',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  },
  {
    projectId: 'project-3',
    projectName: 'Tonic',
    projectClasses1: 'CANOPY',
    projectClasses2: '• Back End Dev',
    projectClasses3: '• 2015',
    projectImage: './images/SnapshootPortfolio77.jpg',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/iconGitHub.png',
    languages1: 'CSS',
    languages2: 'HTML',
    languages3: 'Bootsrap',
    languages4: 'Ruby',
    languages5: 'GitHub',
    languages6: 'Javascript',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  },
  {
    projectId: 'project-4',
    projectName: 'My Post stories',
    projectClasses1: 'CANOPY',
    projectClasses2: '• Back End Dev',
    projectClasses3: '• 2015',
    projectImage: './images/SnapshootPortfolio2).jpg',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/iconGitHub.png',
    languages1: 'CSS',
    languages2: 'HTML',
    languages3: 'Bootsrap',
    languages4: 'Ruby',
    languages5: 'GitHub',
    languages6: 'Javascript',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  },
];
document.getElementById('button-see').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('project-name').textContent = projects[0].projectName;
  document.getElementById('canopy-modal').textContent = projects[0].projectClasses1;
  document.getElementById('back-modal').textContent = projects[0].projectClasses2;
  document.getElementById('year-modal').textContent = projects[0].projectClasses3;
  document.getElementById('project-image').src = projects[0].projectImage;
  document.getElementById('photo-cancel').src = projects[0].projectImage2;
  document.getElementById('photo-git').src = projects[0].projectImage3;
  document.getElementById('photo-link').src = projects[0].projectImage4;
  document.getElementById('html-modal').textContent = projects[0].languages1;
  document.getElementById('css-modal').textContent = projects[0].languages2;
  document.getElementById('bootstrap-modal').textContent = projects[0].languages3;
  document.getElementById('ruby-modal').textContent = projects[0].languages4;
  document.getElementById('java-modal').textContent = projects[0].languages5;
  document.getElementById('github-modal').textContent = projects[0].languages6;
  document.getElementById('live-linkl').textContent = projects[0].liveLink;
  document.getElementById('source-linkl').textContent = projects[0].sourceLink;
  document.getElementById('modal-description').textContent = projects[0].description;
});
document.getElementById('button-see-two').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('project-name').textContent = projects[1].projectName;
  document.getElementById('canopy-modal').textContent = projects[1].projectClasses1;
  document.getElementById('back-modal').textContent = projects[1].projectClasses2;
  document.getElementById('year-modal').textContent = projects[1].projectClasses3;
  document.getElementById('project-image').src = projects[1].projectImage;
  document.getElementById('photo-cancel').src = projects[1].projectImage2;
  document.getElementById('photo-git').src = projects[1].projectImage3;
  document.getElementById('photo-link').src = projects[1].projectImage4;
  document.getElementById('html-modal').textContent = projects[1].languages1;
  document.getElementById('css-modal').textContent = projects[1].languages2;
  document.getElementById('bootstrap-modal').textContent = projects[1].languages3;
  document.getElementById('ruby-modal').textContent = projects[1].languages4;
  document.getElementById('java-modal').textContent = projects[1].languages5;
  document.getElementById('github-modal').textContent = projects[1].languages6;
  document.getElementById('live-link').textContent = projects[1].liveLink;
  document.getElementById('source-link').textContent = projects[1].sourceLink;
  document.getElementById('modal-description').textContent = projects[1].description;
});
document.getElementById('button-tonic-3').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('project-name').textContent = projects[2].projectName;
  document.getElementById('canopy-modal').textContent = projects[2].projectClasses1;
  document.getElementById('back-modal').textContent = projects[2].projectClasses2;
  document.getElementById('year-modal').textContent = projects[2].projectClasses3;
  document.getElementById('project-image').src = projects[2].projectImage;
  document.getElementById('photo-cancel').src = projects[2].projectImage2;
  document.getElementById('photo-git').src = projects[2].projectImage3;
  document.getElementById('photo-link').src = projects[2].projectImage4;
  document.getElementById('html-modal').textContent = projects[2].languages1;
  document.getElementById('css-modal').textContent = projects[2].languages2;
  document.getElementById('bootstrap-modal').textContent = projects[2].languages3;
  document.getElementById('ruby-modal').textContent = projects[2].languages4;
  document.getElementById('java-modal').textContent = projects[2].languages5;
  document.getElementById('github-modal').textContent = projects[2].languages6;
  document.getElementById('live-link').textContent = projects[2].liveLink;
  document.getElementById('source-link').textContent = projects[2].sourceLink;
  document.getElementById('modal-description').textContent = projects[2].description;
});
document.getElementById('button-see-mypost').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('project-name').textContent = projects[3].projectName;
  document.getElementById('canopy-modal').textContent = projects[3].projectClasses1;
  document.getElementById('back-modal').textContent = projects[3].projectClasses2;
  document.getElementById('year-modal').textContent = projects[3].projectClasses3;
  document.getElementById('project-image').src = projects[3].projectImage;
  document.getElementById('photo-cancel').src = projects[3].projectImage2;
  document.getElementById('photo-git').src = projects[3].projectImage3;
  document.getElementById('photo-link').src = projects[3].projectImage4;
  document.getElementById('html-modal').textContent = projects[3].languages1;
  document.getElementById('css-modal').textContent = projects[3].languages2;
  document.getElementById('bootstrap-modal').textContent = projects[3].languages3;
  document.getElementById('ruby-modal').textContent = projects[3].languages4;
  document.getElementById('java-modal').textContent = projects[3].languages5;
  document.getElementById('github-modal').textContent = projects[3].languages6;
  document.getElementById('live-link').textContent = projects[3].liveLink;
  document.getElementById('source-link').textContent = projects[3].sourceLink;
  document.getElementById('modal-description').textContent = projects[3].description;
});
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'none';
});

const mail = document.getElementById('mail');
const form = document.getElementById('form');
const word = document.getElementById('mistake');

form.addEventListener('submit', (e) => {
  if (mail.value === mail.value.toLowerCase()) {
    word.textContent = '';
  } else {
    e.preventDefault();
    word.textContent = 'The email must be in lowercase';
  }
});

const myObject = {
  UserName: '',
  Email: '',
  Usermessage: '',
};

form.addEventListener('change', () => {
  myObject.UserName = document.getElementById('name').value;
  myObject.Email = document.getElementById('mail').value;
  myObject.Usermessage = document.querySelector('msg').value;
  localStorage.setItem('saved', JSON.stringify(myObject));
});

const storageObject = JSON.parse(localStorage.getItem('saved'));
document.getElementById('name').value = storageObject.UserName;
document.getElementById('mail').value = storageObject.Email;
document.querySelector('msg').value = storageObject.Usermessage;