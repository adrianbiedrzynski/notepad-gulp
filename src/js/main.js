// place your code below

const textArea = document.querySelector('.text');
const buttonSave = document.querySelector('.notepad__save');
const buttonLoad = document.querySelector('.notepad__load');

buttonSave.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('textArea', textArea.value);
})

buttonLoad.addEventListener('click', (e) => {
  e.preventDefault();
  textArea.value = localStorage.getItem('textArea');
})


