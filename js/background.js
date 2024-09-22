const images = ["background1.jpg", "background2.jpg", "background3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;