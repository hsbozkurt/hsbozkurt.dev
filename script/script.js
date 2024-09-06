function spreadDots(numberOfDots) {
  const dots = [];

  const dotContainer = document.createElement('div');

  dotContainer.style.position = 'fixed';
  dotContainer.style.top = 0;
  dotContainer.style.left = 0;
  dotContainer.style.width = '100vw';
  dotContainer.style.height = '100vh';
  dotContainer.style.pointerEvents = 'none';
  dotContainer.style.zIndex = 999999

  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');

    dot.classList.add('dot');
    dot.style.width = '2px';
    dot.style.height = '2px';
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    dot.style.position = 'absolute';
    dot.style.transition = 'all 0.5s';

    dots.push(dot);
  }

  dots.forEach(dot => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    dot.style.left = `${x}vw`;
    dot.style.top = `${y}vh`;

    dotContainer.appendChild(dot);
  });

  document.body.appendChild(dotContainer);

  return dots;
}

const randomNumberOfDots = Math.floor(Math.random() * 40) + 10;
const dots = spreadDots(randomNumberOfDots);

const addOpacity = setInterval(() => {
  dots.forEach(dot => {
    const opacity = parseFloat(dot.style.backgroundColor.split(',')[3].replace(')', ''));

    if (opacity < 0.5) {
      dot.style.backgroundColor = `rgba(255, 255, 255, ${opacity + 0.1})`;
    }
  });
}, 100);

setTimeout(() => {
  clearInterval(addOpacity);
}, 5000);
