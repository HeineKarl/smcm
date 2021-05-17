const headerUp = () => {
  const hero = document.querySelector(".hero");
  let upscroll = window.pageYOffset;
  console.log(upscroll);

  if (hero.classList.contains("top")) {
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (upscroll > currentScrollPos) {
        hero.style.top = "0";
        return;
      } else {
        hero.style.top = "-20vh";
      }
      upscroll = currentScrollPos;
    };
  } else {
    return;
  }
};

const header = document.querySelector(".hero");
const main = document.querySelector("main");
const mainOptions = {
  rootMargin: "-300px",
};

const mainObserver = new IntersectionObserver((entries, mainObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("top");
      headerUp();
    } else {
      header.classList.remove("top");
    }
  });
}, mainOptions);
mainObserver.observe(main);

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

  const navArrow = document.querySelectorAll(".navbx__arrow");
  const arrowAbout = navArrow[0];
  const arrowMeganav = navArrow[1];
  const arrowServices = navArrow[2];

  if (servicesContainer.classList.contains("open")) {
    // Closing Services and Opening About Nav
    servicesContainer.classList.remove("open");
    aboutContainer.classList.add("open");
    // Arrow Rotation back and rotating about arrow
    arrowServices.classList.remove("rotate");
    arrowAbout.classList.add("rotate");
    // Animation each links
    linksAnimation(aboutSubLinks);
    linksAnimation(servicesSubLinks);
  } else if (megaContainer.classList.contains("open")) {
    // Closing Meganav and Opening About Nav
    megaContainer.classList.remove("open");
    aboutContainer.classList.add("open");
    // Rotating Meganav back and rotating about arrow
    arrowMeganav.classList.remove("rotate");
    arrowAbout.classList.add("rotate");
    // Animation each links
    linksAnimation(aboutSubLinks);
  } else {
    aboutContainer.classList.toggle("open");
    arrowAbout.classList.toggle("rotate");
    linksAnimation(aboutSubLinks);
  }
});
meganavBtn.addEventListener("click", () => {
  const servicesContainer = document.querySelector(".services-container");
  const servicesSubLinks = Array.from(servicesContainer.children);
  const aboutContainer = document.querySelector(".about-container");
  const aboutSubLinks = Array.from(aboutContainer.children);
  const megaContainer = document.querySelector(".meganav");

  const navArrow = document.querySelectorAll(".navbx__arrow");
  const arrowAbout = navArrow[0];
  const arrowMeganav = navArrow[1];
  const arrowServices = navArrow[2];

  if (aboutContainer.classList.contains("open")) {
    aboutContainer.classList.remove("open");
    megaContainer.classList.add("open");
    // arrow
    arrowAbout.classList.remove("rotate");
    arrowMeganav.classList.add("rotate");
    linksAnimation(aboutSubLinks);
  } else if (servicesContainer.classList.contains("open")) {
    servicesContainer.classList.remove("open");
    megaContainer.classList.add("open");
    // arrow
    arrowServices.classList.remove("rotate");
    arrowMeganav.classList.add("rotate");
    linksAnimation(servicesSubLinks);
  } else {
    megaContainer.classList.toggle("open");
    arrowMeganav.classList.toggle("rotate");
  }
});
servicesBtn.addEventListener("click", () => {
  const servicesContainer = document.querySelector(".services-container");
  const servicesSubLinks = Array.from(servicesContainer.children);
  const aboutContainer = document.querySelector(".about-container");
  const aboutSubLinks = Array.from(aboutContainer.children);
  const megaContainer = document.querySelector(".meganav");

  const navArrow = document.querySelectorAll(".navbx__arrow");
  const arrowAbout = navArrow[0];
  const arrowMeganav = navArrow[1];
  const arrowServices = navArrow[2];

  if (aboutContainer.classList.contains("open")) {
    aboutContainer.classList.remove("open");
    servicesContainer.classList.add("open");
    // arrow
    arrowAbout.classList.remove("rotate");
    arrowServices.classList.add("rotate");
    linksAnimation(servicesSubLinks);
    linksAnimation(aboutSubLinks);
  } else if (megaContainer.classList.contains("open")) {
    megaContainer.classList.remove("open");
    servicesContainer.classList.add("open");
    // arrow
    arrowMeganav.classList.remove("rotate");
    arrowServices.classList.add("rotate");
    linksAnimation(servicesSubLinks);
  } else {
    servicesContainer.classList.toggle("open");
    arrowServices.classList.toggle("rotate");
    linksAnimation(servicesSubLinks);
  }
});

document.addEventListener("click", (e) => {
  const servicesContainer = document.querySelector(".services-container");
  const servicesSubLinks = Array.from(servicesContainer.children);
  const aboutContainer = document.querySelector(".about-container");
  const aboutSubLinks = Array.from(aboutContainer.children);
  const megaContainer = document.querySelector(".meganav");

  const navArrow = document.querySelectorAll(".navbx__arrow");
  const arrowAbout = navArrow[0];
  const arrowMeganav = navArrow[1];
  const arrowServices = navArrow[2];

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
      arrowAbout.classList.remove("rotate");
      linksAnimation(aboutSubLinks);
    }
    if (servicesContainer.classList.contains("open")) {
      //   console.log("WORK");
      servicesContainer.classList.remove("open");
      arrowServices.classList.remove("rotate");
      linksAnimation(servicesSubLinks);
    }
    if (megaContainer.classList.contains("open")) {
      //   console.log("WORK");
      megaContainer.classList.remove("open");
      arrowMeganav.classList.remove("rotate");
      // linksAnimation(aboutSubLinks);
    }
  } else {
    return;
  }
});
