"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


// place your code below

const textArea = document.querySelector('.text');
const buttonSave = document.querySelector('.notepad__button--save');
const buttonLoad = document.querySelector('.notepad__button--load');

buttonSave.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('textArea', textArea.value);
})

buttonLoad.addEventListener('click', (e) => {
  e.preventDefault();
  textArea.value = localStorage.getItem('textArea');
})


