const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.webp',
  '5.webp',
  '6.webp',
  '7.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImage}`;
bgImg.classList.add('bgimg');

document.body.appendChild(bgImg);
