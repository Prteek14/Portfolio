function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
      document.getElementById("time").textContent = timeString;
    }

updateTime(); // ✅ runs once on page load
setInterval(updateTime, 1000); // 🔁 Update every second

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}
document.getElementById("React-Mini-Apps").addEventListener("click", function () {
  window.open("https://react-mini-site.netlify.app/", "_blank","noopener,noreferrer");
});

document.getElementById("img_site").addEventListener("click", function () {
  window.open("https://memories-prteek.netlify.app","noopener,noreferrer");
});

document.getElementById("calc_site").addEventListener("click", function () {
  window.open("https://calculator-js-prteek.netlify.app","noopener,noreferrer");
});
document.getElementById("my_img").addEventListener('contextmenu', event => event.preventDefault());

const observer = new MutationObserver(mutations => {
    document.querySelectorAll('img[src^="chrome-extension://gmpljdlgcdkljlppaekciacdmdlhfeon/"]').forEach(el => el.remove());
});
observer.observe(document.body, { childList: true, subtree: true });


window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".range-in").forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent + "%";
  });
});




