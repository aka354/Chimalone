const sidebarToggle = document.querySelector('#sidebar-active');
const linksContainer = document.querySelector('.links-container');

sidebarToggle.addEventListener('change', () => {
    linksContainer.classList.toggle('active');
});
