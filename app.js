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
    projectName: 'Tesla Car',
    projectClasses1: 'MICROVERSE',
    projectClasses2: 'REMOTE',
    projectClasses3: '2023',
    projectImage: './images/land-tesla.webp',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/githubb.webp',
    languages1: 'REACT',
    languages2: 'RAILS',
    languages3: 'POSTGRESQL',
    languages4: 'GITHUB',
    languages5: 'RENDER',
    languages6: 'TEAMWORK',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: 'Tesla app, you can easily manage your Tesla products no matter where you are. The app offers a comprehensive view of your energy ecosystem.',
  },
  {
    projectId: 'project-2',
    projectName: 'Budget App',
    projectClasses1: 'MICROVERSE',
    projectClasses2: 'REMOTE',
    projectClasses3: '2023',
    projectImage: './images/budget-app-home.webp',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/githubb.webp',
    languages1: 'REACT',
    languages2: 'RAILS',
    languages3: 'POSTGRESQL',
    languages4: 'GITHUB',
    languages5: 'RENDER',
    languages6: 'TESTING',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: ' A budgeting app is a software application that you may access from your computer, tablet, or mobile device to track your finances.',
  },
  {
    projectId: 'project-3',
    projectName: 'BookStore',
    projectClasses1: 'MICROVERSE',
    projectClasses2: 'REMOTE',
    projectClasses3: '2022',
    projectImage: './images/bookstore-home.webp',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/githubb.webp',
    languages1: 'REACT',
    languages2: 'REDUX',
    languages3: 'NETLIFY',
    languages4: 'GITHUB',
    languages5: 'TESTING',
    languages6: 'PROBLEM SOLVING',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: 'Bookstores sell books and book-adjacent items, of course. But they also may serve as editorial offices, publishing houses, classrooms, and lecture halls.',
  },
  {
    projectId: 'project-4',
    projectName: 'Crypto App',
    projectClasses1: 'MICROVERSE',
    projectClasses2: 'REMOTE',
    projectClasses3: '2022',
    projectImage: './images/crypto-home.webp',
    projectImage2: './images/IconCancel.png',
    projectImage3: './images/Icon-Export.png',
    projectImage4: './images/githubb.webp',
    languages1: 'REACT',
    languages2: 'REDUX',
    languages3: 'CSS',
    languages4: 'GITHUB',
    languages5: 'VERCEL',
    languages6: 'BOOTSTRAP',
    liveLink: 'See Live',
    sourceLink: 'See Source',
    description: 'Crypto Solution allows banks and digital wallets to offer their customers the possibility to buy, sell, receive, send, and store Bitcoin, etc.',
  },
];
document.getElementById('button-see-tesla').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('banana').textContent = projects[0].description;
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
  document.getElementById('live-link').textContent = projects[0].liveLink;
  document.getElementById('source-link').textContent = projects[0].sourceLink;
});
document.getElementById('button-see-budget').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('banana').textContent = projects[1].description;
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
});
document.getElementById('button-see-bookstore').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('banana').textContent = projects[2].description;
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
});
document.getElementById('button-see-crypto').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('banana').textContent = projects[3].description;
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
  const list = document.getElementById('frameworks');
  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}
toggleFrameworks();

function toggleSkills() {
  const list = document.getElementById('skills');
  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}
toggleSkills();