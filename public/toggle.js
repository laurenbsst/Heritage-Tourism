let dark_button = document.getElementById('dark_toggle');
let nav = document.getElementById('main-nav');

if (dark_button) {
    dark_button.addEventListener("click", toggleMode);
}

function toggleMode() {
    dark_button.classList.toggle("active");
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        nav.style.backgroundColor = "#C3D6A0";
        localStorage.setItem("nav", '#C3D6A0');
        localStorage.setItem("mode", 'light');
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        nav.style.backgroundColor = "#6F7378";
        localStorage.setItem("nav", '#6F7378');
        localStorage.setItem("mode", 'dark');

    }
};

export {dark_button};
