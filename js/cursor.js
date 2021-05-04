const cursor = document.querySelector('.cursor');
const buttons = document.querySelectorAll('button');
const menuItems = document.querySelectorAll('.menu-item');
const submitBtns = document.querySelectorAll('input[type=submit]');
const links = document.querySelectorAll('a');


window.addEventListener('mousemove', e => {
  const x = e.clientX + window.scrollX;
  const y = e.clientY + window.scrollY;

  cursor.style.left = `${x - 9}px`;
  cursor.style.top = `${y - 9}px`;
});

const addClass = () => {
  cursor.classList.add('hovering');
}

const removeClass = () => {
  cursor.classList.remove('hovering');
}

menuItems.forEach(item => {
  item.addEventListener('mouseover', addClass);
  item.addEventListener('mouseout', removeClass);
})

buttons.forEach(btn => {
  btn.addEventListener('mouseover', addClass);
  btn.addEventListener('mouseout', removeClass);
})

submitBtns.forEach(sub => {
  sub.addEventListener('mouseover', addClass);
  sub.addEventListener('mouseout', removeClass);
})

links.forEach(a => {
  a.addEventListener('mouseover', addClass);
  a.addEventListener('mouseout', removeClass);
})