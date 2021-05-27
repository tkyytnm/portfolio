const ham = document.getElementById('hamburger');
const nav = ham.parentElement.getElementsByTagName('nav')[0];
const aLink = ham.parentElement.getElementsByTagName('a');

console.log(aLink);

const toggleHam = function() {
  if (!ham.className) {
    ham.className = 'on';
    nav.className = 'on';
  } else {
    ham.className = '';
    nav.className = '';
  }
  
}

ham.addEventListener('click', toggleHam);