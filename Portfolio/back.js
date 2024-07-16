document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        document.querySelectorAll('*').forEach(element => {
            element.classList.toggle('dark-mode');
        });
    });
});
