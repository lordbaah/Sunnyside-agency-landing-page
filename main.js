const menuicon = document.querySelector('.mobile-menu-icon');
const mobilemenu = document.querySelector('.mobile-menu');

menuicon.addEventListener('click', () => {
    mobilemenu.classList.toggle('active');
});