//const toggleButton = document.querySelector('.nav')
const toggleButton = document.getElementsByClassName('navToggle')[0];
const naviLinks = document.getElementsByClassName('navLinks');

toggleButton.addEventListener('click', () => 
{
  for(var i=0; i < naviLinks.length; i++)
  {
    naviLinks[i].classList.toggle('active');
  }
})