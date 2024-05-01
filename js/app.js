const toggleIconContainer = document.querySelector(".toggle-icon-container");
const navLinks = document.getElementById("header-links");
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const shortLine = document.querySelector('.short-line');

toggleIconContainer.addEventListener("click", function () {
  navLinks.classList.toggle("display-active");

  if(navLinks.classList.contains('display-active')){
    shortLine.style.display = 'none';
    lineOne.style.transform = 'rotate(45deg)';
    lineTwo.style.transform = 'rotate(-45deg)';
  } else{
    shortLine.style.display = 'block';
    lineOne.style.transform = 'rotate(0deg)';
    lineTwo.style.transform = 'rotate(0deg)';
  }
});



let homeBtn = document.getElementById('home-btn');

function insertBefore(element) {
  let btnBefore = document.createElement('span');

  btnBefore.style.content = '""';
  btnBefore.style.position = 'absolute';
  btnBefore.style.top = '130%';
  btnBefore.style.left = '50%';
  btnBefore.style.transform = 'translate(-50%, -50%)';
  btnBefore.style.width = '80%';
  btnBefore.style.height = '2px';
  btnBefore.style.background = 'var(--main-gradient)';
  btnBefore.style.transition = 'var(--main-transition)';

  element.insertBefore(btnBefore, element.firstChild);
}

function removeBefore(element) {
  let btnBefore = element.querySelector('span');
  if (btnBefore) {
    element.removeChild(btnBefore);
  }
}

homeBtn.addEventListener('click', () => {
  insertBefore(homeBtn);

  window.scrollTo({
    top: 0,
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    homeBtn.style.color = 'rgba(0, 0, 0, 0.4)';
    removeBefore(homeBtn);
  } else {
    homeBtn.style.color = 'var(--main-color)';
    insertBefore(homeBtn);
  }
});


function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({});
  }
}
