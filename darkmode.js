const darkModeToggle = document.getElementById('darkModeToggle');
const hero = document.body;

darkModeToggle.addEventListener('click', () => {
    console.log("anjayt")
    darkModeToggle.classList.toggle('dark');
    hero.classList.toggle('dark-mode');
});
