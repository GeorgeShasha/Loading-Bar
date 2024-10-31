const counterEl = document.querySelector(".couter");
const loadingBarFront = document.querySelector(".loading-bar-front");

let i = 0;

const updateCounter = () => {
  counterEl.innerHTML = `${i}%`;
  loadingBarFront.style.width = `${i}%`;
  i++;
  if (i < 101) {
    setTimeout(updateCounter, 50);
  }
};

updateCounter();
