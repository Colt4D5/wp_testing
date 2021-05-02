const canvas = document.querySelector('#nav-canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 120;

const purple = '#561bcd';

let particlesArray = [];

// class Star {
//   constructor(x, radius, velX) {
//     this.radius = radius;
//     this.x = x;
//     this.y = -this.radius;
//     this.density = Math.random() + 0.5;
//     this.gravity = 0.2;
//     this.velX = velX;
//     this.velY = 0;
//   }

//   update() {
//     this.x += this.velX;
//     this.y += this.gravity * this.density;
//     this.gravity += 0.05;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = '#fff';
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.closePath();
//   }

// }


// (function() {
//   for (let i = 0; i < 20; i++) {
//     const x = Math.random() * canvas.width;
//     const radius = Math.random() * 3 + 0.4;
//     const velX = Math.random() * 4 - 2;

//     starsArr.push(new Star(x, radius, velX));
//   }
// })()


// const animate = () => {
//   // ctx.fillStyle = 'rgba(0,0,0,0.05)';
//   // ctx.fillRect(0,0,canvas.width,canvas.height);
//   ctx.clearRect(0,0,canvas.width,canvas.height);

//   starsArr.forEach( star => {
//     star.update();
//     star.draw();

//     if (star.y - star.radius > 120) {
//       star.y = -star.radius;
//       star.gravity = 0.2;
//       star.x = Math.random() * canvas.width;
//     }
//   })

//   requestAnimationFrame(animate);
// }
// animate();

class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.baseX = this.x;
    this.baseY = this.y;
    this.directionX = Math.random() * 4 - 2;
    this.directionY = Math.random() * 4 - 2;
    this.collision = false;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
  update() {
    this.x += this.directionX;
    this.y += this.directionY;
    if (this.x + this.radius + this.directionX >= canvas.width || this.x - this.radius + this.directionX <= 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.radius + this.directionY >= canvas.height || this.y - this.radius + this.directionY <= 0) {
      this.directionY = -this.directionY;
    }
    
  }
}

function init() {
  for (let i = 0; i < 20; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = 1;
    let color = purple;
    particlesArray.push(new Particle(x, y, radius, color));
  }
}
init();

function animate() {
  c.clearRect(0,0,canvas.width,canvas.height);
  
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
    for (let j = i; j < particlesArray.length; j++) {
      let dx = particlesArray[i].x - particlesArray[j].x;
      let dy = particlesArray[i].y - particlesArray[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 250;
      let opacity = (1 - distance/maxDistance) / 3;
      if (distance < maxDistance) {
        c.lineWidth = 1;
        c.strokeStyle = `rgba(255,255,255,${opacity})`;
        // c.strokeStyle = `rgba(255,255,255,1)`
        c.beginPath();
        c.moveTo(particlesArray[i].x, particlesArray[i].y);
        c.lineTo(particlesArray[j].x, particlesArray[j].y);
        c.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();
