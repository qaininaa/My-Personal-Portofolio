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



// deploy site kalkulator web
const siteKalku = document.getElementById('siteKalku');
sitePrakWeb.addEventListener('click', function() {
    window.open('https://kalkulatorkarina.netlify.app/');
})

// prototype depot anugrah
const prototypeDepot = document.getElementById('prototypeDepot');
prototypeDepot.addEventListener('click', function() {
    window.open('https://www.figma.com/proto/dsvd0AQRKbQ1jOylNXE3HY/web-depot?node-id=13-148&t=cjE4y5ckS9vqQiPt-1&scaling=scale-down-width&page-id=11%3A2');
})

// protype project TD desa kailuring
const prototypeDesa = document.getElementById('prototypeDesa')
prototypeDesa.addEventListener('click', function() {
    window.open('https://www.figma.com/proto/n7YJtjN9NSKUSPYCv0tpEG/PROJEK-TD?node-id=35-144&t=DtEWsEsJctf0Eq6k-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=35%3A144');
})

