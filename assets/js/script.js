const side_menu = document.getElementById('side-menu');
const side = document.getElementById('sidebar-menu');
const shadow = document.querySelector('.bg-shadow');

side_menu.addEventListener('click' , () => {
    side.classList.add('active');
    shadow.toggleAttribute('hidden');
})
shadow.addEventListener('click' , () => {
    side.classList.remove('active');
    shadow.toggleAttribute('hidden');
})