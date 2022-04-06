//const toggleButton = document.querySelector('.nav')
const toggleButton = document.getElementsByClassName('navToggle')[0];
const naviLinks = document.getElementsByClassName('navLinks');
const form = document.querySelector('form');
const containers = document.querySelectorAll('.inputContainer');
const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'Power2.easeOut'}})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
}

let vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);

tl.fromTo('.mainTxt', {opacity: 0}, {opacity: 1, duration: 2.5})
tl.fromTo('.bgCircles', {y:0}, {y:-20, yoyo: true, repeat: -1, duration: 0.75}, "<")
tl.fromTo('.bgCircles1', {y:50}, {y:-100, yoyo: true, repeat: -1, duration: 0.75}, "<")
tl.fromTo('.bgCircles2', {y:50}, {y:-100, yoyo: true, repeat: -1, duration: 0.75}, "<")
tl.fromTo('.bgCircles5', {y:50}, {y:-100, yoyo: true, repeat: -1, duration: 0.75}, "<")
tl.fromTo('.bgCircles6', {y:50}, {y:-100, yoyo: true, repeat: -1, duration: 0.75}, "<")
tl.to('.cpuSqr', {scale: 2, yoyo: true, repeat: -1}, '<')
tl.to('.phnSqr',{scale: 2, yoyo: true, repeat: -1}, '<')

toggleButton.addEventListener('click', () => 
{
  for(var i=0; i < naviLinks.length; i++)
  {
    naviLinks[i].classList.toggle('active');
  }
})


containers.forEach((container) =>{

  const input = container.querySelector('input');
  const line = container.querySelector(".elastic-line");
  const placeholder = container.querySelector('.placeHolder');
 // const inputName = container.querySelector('.inputName'); 
  //check for text input
         //validation

    //Name Validation
    input.addEventListener("input", (e) => {
      if (e.target.type === "text") {
        let inputText = e.target.value;
        if (inputText.length > 2) {
          colorize("#6391E8", line, placeholder, input);
        } else {
          colorize("#FE8C99", line, placeholder, input);
        }
      }
      //Validate Email

      function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
      
      if (e.target.type === "email") {
        let valid = validateEmail(e.target.value);
        if (valid) {
          colorize("#6391E8", line, placeholder);
        } else {
          colorize("#FE8C99", line, placeholder);
        }

      
      }
      //Validate Phone

      function validatePhone(phone) {
        let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phone);
      }


      if (e.target.type === "tel") {
        let valid = validatePhone(e.target.value);
        if (valid) {
          colorize("#6391E8", line, placeholder);
        } else {
          colorize("#FE8C99", line, placeholder);
        }

        
      }

    })

  })


  




//COLORIZE FUNCTION
function colorize(color, line, placeholder) {
  gsap.to(line, { stroke: color, duration: 0.75 });
  gsap.to(placeholder, { color: color, duration: 0.75 });
}