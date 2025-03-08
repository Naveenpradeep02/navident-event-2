document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const Days1 = document.getElementById("days1");
const Hours1 = document.getElementById("hours1");
const Minutes1 = document.getElementById("minutes1");
const Seconds1 = document.getElementById("seconds1");

const targetedDate = new Date("May 1 ,2025 22:30:00").getTime();
const timer = () => {
  const CurrentDate = new Date().getTime();
  const distance = targetedDate - CurrentDate;

  const days = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  Days.innerHTML = days;
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;
  Days1.innerHTML = days;
  Hours1.innerHTML = hours;
  Minutes1.innerHTML = minutes;
  Seconds1.innerHTML = seconds;

  if (distance < 0) {
    Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
    Days1.innerHTML = "00";
    Hours1.innerHTML = "00";
    Minutes1.innerHTML = "00";
    Seconds1.innerHTML = "00";
  }
};

timer();
setInterval(timer, 1000);

(function () {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");

  function parallax(e) {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let depth1 = `${50 * (mouseX - w) * 0.01}% ${50 * (mouseY - h) * 0.01}%`;
    let depth2 = `${50 * (mouseX - w) * 0.02}% ${50 * (mouseY - h) * 0.02}%`;
    let depth3 = `${50 * (mouseX - w) * 0.06}% ${50 * (mouseY - h) * 0.06}%`;
    let x = `${depth3}, ${depth2}, ${depth1}`;
    elem.style.backgroundPosition = x;
  }
})();
