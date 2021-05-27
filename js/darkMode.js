// Switch Dark Mode
const darkButton = document.getElementById('dark');

const switchDark = function() {
  const body = document.getElementsByTagName('body')[0];
  if (!body.className) {
    body.className = 'dark';
    darkButton.querySelector('i').classList.remove('fa-toggle-off');
    darkButton.querySelector('i').classList.add('fa-toggle-on');
  } else {
    body.className = '';
    darkButton.querySelector('i').classList.add('fa-toggle-off');
    darkButton.querySelector('i').classList.remove('fa-toggle-on');
  }
}

darkButton.addEventListener('click', switchDark);