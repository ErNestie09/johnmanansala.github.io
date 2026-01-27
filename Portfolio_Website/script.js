document.querySelectorAll('a[href="#projects"]').forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(".featured").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll('a[href="#services"]').forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(".partners-cta").scrollIntoView({
      behavior: "smooth"
    });
  });
});

const sections = [
  { id: "home", link: document.querySelector('.nav a[href="#home"]') },
  { id: "projects", link: document.querySelector('.nav a[href="#projects"]') },
  { id: "services", link: document.querySelector('.nav a[href="#services"]') }
];

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const el = document.getElementById(section.id);
    const offset = el.offsetTop - 120;
    const height = el.offsetHeight;

    if (window.scrollY >= offset && window.scrollY < offset + height) {
      current = section.id;
    }
  });

  sections.forEach(section => {
    section.link.classList.remove("active");
    if (section.id === current) {
      section.link.classList.add("active");
    }
  });
});

const revealElements = document.querySelectorAll(
  ".hero, .founder, .featured, .partners-cta"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("reveal", "visible");
    } else {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 20);
});
