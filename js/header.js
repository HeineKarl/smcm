const aboutBtn = document.querySelector(".about-btn");
const meganavBtn = document.querySelector(".meganav-btn");
const servicesBtn = document.querySelector(".services-btn");

const linksAnimation = (el) => {
  el.forEach((sublink, index) => {
    if (sublink.style.animation) {
      sublink.style.animation = "";
    } else {
      sublink.style.animation = `animationLinks 450ms ease forwards`;
      sublink.style.animationDelay = `${index / 10}s`;
    }
  });
};

aboutBtn.addEventListener("click", () => {
  const aboutContainer = document.querySelector(".about-container");
  const aboutSubLinks = Array.from(aboutContainer.children);
  const servicesContainer = document.querySelector(".services-container");
  const servicesSubLinks = Array.from(servicesContainer.children);
  const megaContainer = document.querySelector(".meganav");

  if (servicesContainer.classList.contains("open")) {
    servicesContainer.classList.remove("open");
    aboutContainer.classList.add("open");
    linksAnimation(aboutSubLinks);
    linksAnimation(servicesSubLinks);
  } else if (megaContainer.classList.contains("open")) {
    megaContainer.classList.remove("open");
    aboutContainer.classList.add("open");
    linksAnimation(aboutSubLinks);
  } else {
    aboutContainer.classList.toggle("open");
    linksAnimation(aboutSubLinks);
  }
});
meganavBtn.addEventListener("click", () => {
  const servicesContainer = document.querySelector(".services-container");
  const servicesSubLinks = Array.from(servicesContainer.children);
  const aboutContainer = document.querySelector(".about-container");
  const aboutSubLinks = Array.from(aboutContainer.children);
  const megaContainer = document.querySelector(".meganav");

  if (aboutContainer.classList.contains("open")) {
    aboutContainer.classList.remove("open");
    megaContainer.classList.add("open");
    linksAnimation(aboutSubLinks);
  } else if (servicesContainer.classList.contains("open")) {
    servicesContainer.classList.remove("open");
    megaContainer.classList.add("open");
    linksAnimation(servicesSubLinks);
  } else {
    megaContainer.classList.toggle("open");
  }
});
servicesBtn.addEventListener("click", () => {
  const servicesContainer = document.querySelector(".services-container");
  const servicesSubLinks = Array.from(servicesContainer.children);
  const aboutContainer = document.querySelector(".about-container");
  const aboutSubLinks = Array.from(aboutContainer.children);
  const megaContainer = document.querySelector(".meganav");

  if (aboutContainer.classList.contains("open")) {
    aboutContainer.classList.remove("open");
    servicesContainer.classList.add("open");
    linksAnimation(servicesSubLinks);
    linksAnimation(aboutSubLinks);
  } else if (megaContainer.classList.contains("open")) {
    megaContainer.classList.remove("open");
    servicesContainer.classList.add("open");
    linksAnimation(servicesSubLinks);
  } else {
    servicesContainer.classList.toggle("open");
    linksAnimation(servicesSubLinks);
  }
});

document.addEventListener("click", (e) => {
  const servicesContainer = document.querySelector(".services-container");
  const servicesSubLinks = Array.from(servicesContainer.children);
  const aboutContainer = document.querySelector(".about-container");
  const aboutSubLinks = Array.from(aboutContainer.children);
  const megaContainer = document.querySelector(".meganav");

  //   console.log(e.target.tagName);
  //   console.log(e.target.id);

  if (
    aboutContainer.classList.contains("open") ||
    servicesContainer.classList.contains("open") ||
    megaContainer.classList.contains("open")
  ) {
    if (
      e.target.id === "about-btn" ||
      e.target.id === "meganav-btn" ||
      e.target.id === "services-btn"
    ) {
      return;
    }

    if (aboutContainer.classList.contains("open")) {
      //   console.log("WORK");
      aboutContainer.classList.remove("open");
      linksAnimation(aboutSubLinks);
    }
    if (servicesContainer.classList.contains("open")) {
      //   console.log("WORK");
      servicesContainer.classList.remove("open");
      linksAnimation(servicesSubLinks);
    }
    if (megaContainer.classList.contains("open")) {
      //   console.log("WORK");
      megaContainer.classList.remove("open");
      // linksAnimation(aboutSubLinks);
    }
  } else {
    return;
  }
});
