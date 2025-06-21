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
document.getElementById("e_com").addEventListener("click", function () {
  window.open("https://shopaholic2025.netlify.app/", "_blank","noopener,noreferrer");
});

// document.getElementById("food_site").addEventListener("click", function () {
//   window.open("#","noopener,noreferrer");
// });

// document.getElementById("pro_3").addEventListener("click", function () {
//   window.open("#","noopener,noreferrer");
// });
document.getElementById("my_img").addEventListener('contextmenu', event => event.preventDefault());
