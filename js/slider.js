const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const nextImage = () => {
  const tracker = document.querySelector(".slider");
  const lastImage = tracker.lastElementChild;
  const currentImage = document.querySelector(".current-image");
  const nextImage = currentImage.nextElementSibling;
  const indexOfTracker = Array.from(tracker.children).indexOf(currentImage);

  if (lastImage.classList.contains("current-image")) {
    console.log("last Image");
    currentImage.classList.add("current");
    return;
  }

  nextImage.classList.add("current-image");
  currentImage.classList.add("current");
  currentImage.classList.remove("current-image");
};

const prevImage = () => {
  const tracker = document.querySelector(".slider");
  const firstImage = tracker.firstElementChild;
  const lastImage = tracker.lastElementChild;
  const currentImage = document.querySelector(".current-image");
  const prevImage = currentImage.previousElementSibling;

  const indexOfTracker = Array.from(tracker.children).indexOf(currentImage);

  if (
    lastImage.classList.contains("current-image") &&
    lastImage.classList.contains("current")
  ) {
    currentImage.classList.remove("current");
    return;
  }

  if (firstImage.nextElementSibling.classList.contains("current-image")) {
    currentImage.classList.remove("current");
    return;
  }
  // class shifting and animating
  prevImage.classList.add("current-image");
  currentImage.classList.remove("current-image");
  currentImage.classList.remove("current");
  prevImage.classList.remove("current");
};

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
