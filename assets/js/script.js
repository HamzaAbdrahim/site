const mobilmenu = document.getElementById('sidenav-1');
const tooglmenu = document.getElementById('toogl_menu');


tooglmenu.addEventListener('click' , () => {
    mobilmenu.classList.toggle('active')
})