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