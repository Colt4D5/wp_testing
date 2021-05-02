const contactBox = document.querySelector('.contact-container');


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
window.addEventListener('scroll', () => {
  if (isInViewport(contactBox)) {
    const degrees = contactBox.getBoundingClientRect().top;
    contactBox.style.background = `linear-gradient(${215 + (degrees)}deg, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,0))`;
    console.log(contactBox.getBoundingClientRect().top);
  }
});