const projectsList = document.getElementById("projects-list");
const project = projectsList.getElementsByTagName('li');

const toggleFigure = function (e) {
  const icon = e.target.parentElement.getElementsByTagName('i')[0];
  const figure = icon.parentElement.parentElement.getElementsByTagName('figure')[0];

  if (!figure.className) {
    icon.classList.add('on');
    figure.classList.add('on');
  } else {
    icon.classList.remove('on');
    figure.classList.remove('on');
  }
};

for (let i = 0; i < project.length; i++) {
  project[i].addEventListener("click", toggleFigure);
}
