const project1 = document.getElementById("company-home-page-with-flexbox");
const project2 = document.getElementById("responsive-club-website");

const toggleFigure = function (e) {
  const targetId = e.target.getAttribute("id") || e.target.parentNode.getAttribute("id");
  const target = document.getElementById(targetId);
  const figure = target.parentNode.querySelector('figure');

  if (figure.className === 'off') {
    figure.className = 'on';
    target.querySelector("i").classList.add('on');
  } else {
    figure.className = 'off';
    target.querySelector("i").classList.remove('on');
  }
};

project1.addEventListener("click", toggleFigure);
project2.addEventListener("click", toggleFigure);
