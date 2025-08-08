//darkmode and light mode

const root = document.documentElement;
const btn = document.getElementById("theme-switch");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  if (savedTheme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme"); // Dark mode
  }
} else {
  root.removeAttribute("data-theme"); // Default dark
  localStorage.setItem("theme", "dark");
}

// Toggle on click
btn.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "light") {
    root.removeAttribute("data-theme"); // Dark
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light"); // Light
    localStorage.setItem("theme", "light");
  }
});




 const topBar = document.querySelector(".bar-top");
    const rightBar = document.querySelector(".bar-right");
    const bottomBar = document.querySelector(".bar-bottom");
    const leftBar = document.querySelector(".bar-left");

    function updateLoader() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, scrollY / docHeight) : 0; // 0..1

      // Divide into 4 segments: each 25%
      const segment = progress * 4; // 0..4

      // Top: 0 -> 1
      const topProgress = Math.min(1, segment);
      topBar.style.width = (topProgress * 100) + "%";

      // Right: 1 -> 2
      const rightProgress = Math.min(1, Math.max(0, segment - 1));
      rightBar.style.height = (rightProgress * 100) + "%";

      // Bottom: 2 -> 3 (grow from right to left)
      const bottomProgress = Math.min(1, Math.max(0, segment - 2));
      bottomBar.style.width = (bottomProgress * 100) + "%";
      // adjust position so it grows leftwards
      if (bottomProgress > 0) {
        bottomBar.style.right = 0;
        bottomBar.style.left = "auto";
      }

      // Left: 3 -> 4 (grow from bottom to top)
      const leftProgress = Math.min(1, Math.max(0, segment - 3));
      leftBar.style.height = (leftProgress * 100) + "%";
      if (leftProgress > 0) {
        leftBar.style.bottom = 0;
        leftBar.style.top = "auto";
      }
    }

    window.addEventListener("scroll", updateLoader);
    window.addEventListener("load", updateLoader);

      const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    // Toggle menu visibility
    navbar.classList.toggle('active');

    // Toggle icon between bars and cross
    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });
   // Close menu when overlay clicked
  overlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
  });