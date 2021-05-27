const ham = document.getElementById("hamburger");
const nav = ham.parentElement.getElementsByTagName("nav")[0];
const aLink = ham.parentElement.getElementsByTagName("a");

const openHam = function () {
  ham.className = "on";
  nav.className = "on";
};

const closeHam = function () {
  ham.className = "";
  nav.className = "";
};

const toggleHam = function () {
  if (!ham.className) {
    openHam();
  } else {
    closeHam();
  }
};

ham.addEventListener("click", toggleHam);

for (let i=0; i<aLink.length; i++) {
  aLink[i].addEventListener('click', closeHam);
}