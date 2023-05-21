const dark_button = document.getElementById('dark_toggle');

dark_button.addEventListener("click", toggleMode);

function toggleMode() {
    dark_button.classList.toggle("active");
};