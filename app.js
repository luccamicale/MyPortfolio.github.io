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
    projectName: 'Tesla',
    projectClasses1: 'MICROVERSE',
    projectClasses2: 'REMOTE',
    projectClasses3: 'TEAMWORK',
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
];
document.getElementById('button-see-tesla').addEventListener('click', () => {
  console.log('hola')
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

const inputName = document.getElementById('name');
const inputText = document.getElementById('msg');

form.addEventListener('input', () => {
  const myObj = {
    nameValue: inputName.value,
    emailValue: mail.value,
    textAreaValue: inputText.value,
  };
  localStorage.setItem('userFormData', JSON.stringify(myObj));
});

let getData = localStorage.getItem('userFormData');
getData = JSON.parse(getData);

if (getData != null) {
  inputName.value = getData.nameValue;
  mail.value = getData.emailValue;
  inputText.value = getData.textAreaValue;
}


  
function toggleFrameworks() {
  var list = document.getElementById("frameworks");
  if (list.style.display === "none") {
  list.style.display = "block";
  } else {
  list.style.display = "none";
  }
}

function toggleSkills() {
  var list = document.getElementById("skills");
  if (list.style.display === "none") {
  list.style.display = "block";
  } else {
  list.style.display = "none";
  }
}