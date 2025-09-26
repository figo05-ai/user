const toggleBtn = document.getElementById("toggleBtn");
const profileName = document.getElementById("profileName");
const links = document.querySelectorAll(".links");
const profileBox = document.getElementById("profileBox");
let isOpen = false;

toggleBtn.addEventListener("click", () => {
  if (!isOpen) {
    profileBox.classList.add("open");

    setTimeout(() => {
      profileName.classList.add("show");
    }, 700);

    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add("show");
      }, 1000 + index * 200);
    });

    isOpen = true;
  } else {
    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.remove("show");
        link.classList.remove("active");
      }, index * 150);
    });

    setTimeout(() => {
      profileName.classList.remove("show");
    }, links.length * 150 + 300);

    setTimeout(() => {
      profileBox.classList.remove("open");
    }, links.length * 150 + 1000);

    isOpen = false;
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
