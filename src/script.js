// menu hamburger di device kecil
const hamburger = document.getElementById('hamburgerIcon');
const close = document.getElementById('closeIcon');
const list = document.getElementById('List')

hamburger.addEventListener('click', function() {
    hamburger.classList.add('hidden');
    close.style.display = 'block';
    list.style.display = 'block';

})

close.addEventListener('click', function() {
    hamburger.classList.remove('hidden');
    close.style.display = 'none';
    list.style.display = 'none';
})

// deploy site uts praktikum web
const sitePrakWeb = document.getElementById('sitePrakWeb');
sitePrakWeb.addEventListener('click', function() {
    window.open('https://uts-prakweb-karina.netlify.app/');
})

// github uts prak web
const gitHubPrakWeb = document.getElementById('gitHubPrakWeb');
gitHubPrakWeb.addEventListener('click', function() {
    window.open('https://github.com/qaininaa/UTS-Prak-Web.git');
})