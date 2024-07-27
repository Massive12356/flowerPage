

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navBar = document.getElementById('navBar');

    navToggle.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });
});