// Switch Dark Mode
const body = document.getElementsByTagName("body")[0];
const darkButton = document.getElementById("dark");

const checkCookie = function () {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("dark_mode"))
    .split("=")[1];
  return cookieValue;
};

const switchCookie = function () {
  const cookieValue = checkCookie();
  if (cookieValue === "false") {
    document.cookie = "dark_mode=true";
  } else {
    document.cookie = "dark_mode=false";
  }
  return cookieValue;
};

const darkOn = function () {
  body.className = "dark";
  darkButton.querySelector("i").classList.remove("fa-toggle-off");
  darkButton.querySelector("i").classList.add("fa-toggle-on");
};

const darkOff = function () {
  body.className = "";
  darkButton.querySelector("i").classList.add("fa-toggle-off");
  darkButton.querySelector("i").classList.remove("fa-toggle-on");
};

const loadDark = function () {
  const cookieValue = checkCookie();
  if (cookieValue === "false") {
    darkOff();
  } else {
    darkOn();
  }
};

const switchDark = function () {
  const cookieValue = checkCookie();
  if (cookieValue === "false") {
    darkOn();
  } else {
    darkOff();
  }
  switchCookie();
};

window.addEventListener('load', loadDark);
darkButton.addEventListener("click", switchDark);
