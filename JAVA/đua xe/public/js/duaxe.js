var car1 = document.getElementById('car1');
var car2 = document.getElementById('car2');
var step = 1;
var raceStarted = false;

document.getElementById('startButton').addEventListener('click', function () {
  raceStarted = true;
  jumpLights();
});

document.addEventListener('keydown', function (event) {
  if (raceStarted) {
    moveCar(event.key);
  }
});

function moveCar(key) {
  switch (key) {
    case 'ArrowLeft':
      car1.style.right = (parseInt(car1.style.right) - step) + 'px';
      car1.style.left = (parseInt(car1.style.left) + step) + 'px';
      break;
    case 'ArrowRight':
      car1.style.right = (parseInt(car1.style.right) + step) + 'px';
      car1.style.left = (parseInt(car1.style.left) - step) + 'px';
      break;
    case 'a':
      car2.style.right = (parseInt(car2.style.right) - step) + 'px';
      car2.style.left = (parseInt(car2.style.left) + step) + 'px';
      break;
    case 'd':
      car2.style.right = (parseInt(car2.style.right) + step) + 'px';
      car2.style.left = (parseInt(car2.style.left) - step) + 'px';
      break;
  }
}

function jumpLights() {
  // Jump from red to yellow, then green
  setTimeout(function () {
    document.querySelector('.den1').classList.add('light1');
    setTimeout(function () {
      document.querySelector('.den1').classList.remove('light1');
      document.querySelector('.den2').classList.add('light2');
      setTimeout(function () {
        document.querySelector('.den2').classList.remove('light2');
        document.querySelector('.den3').classList.add('light3');
        // Start the race after the green light
        startRace();
      }, 1000); // Time for yellow light
    }, 1000); // Time for red light
  }, 2000); // Initial pause before lights start
}

function startRace() {
  // Set initial positions at the left of the race track
  car1.style.left = '0';
  car1.style.right = 'auto';
  car2.style.left = '0';
  car2.style.right = 'auto';

  // Start moving the cars to the right (incrementing left values)
  setInterval(function () {
    car1.style.left = (parseInt(car1.style.left) + step) + 'px';
    car2.style.left = (parseInt(car2.style.left) + step) + 'px';
  }, 50); // Adjust the interval based on your preference for the speed of movement
}