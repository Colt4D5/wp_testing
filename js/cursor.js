const cursor = document.querySelector('.cursor');
const menuItems = document.querySelectorAll('.menu-item');

window.addEventListener('mousemove', e => {
  const x = e.clientX + window.scrollX;
  const y = e.clientY + window.scrollY;

  cursor.style.left = `${x - 9}px`;
  cursor.style.top = `${y - 9}px`;
});

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hovering');
  })
  item.addEventListener('mouseout', () => {
    cursor.classList.remove('hovering');
  })
})