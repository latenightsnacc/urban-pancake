let mobileBtn = document.getElementById('mobileMenuBtn');
let mobileMenu = document.getElementById('mobileMenu');

mobileBtn.addEventListener('click', function(){
    // console.log('hello world');
    mobileMenu.classList.contains('hidden') ? mobileMenu.classList.remove('hidden') : mobileMenu.classList.add('hidden');
} )