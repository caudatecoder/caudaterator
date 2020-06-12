window.event = new Event('results');
document.addEventListener('results', displayResult)
document.querySelector('.reload').addEventListener('click', displayResult)

function displayResult() {
  document.getElementById('result').innerHTML = fetchResult()
}

function fetchResult() {
  if (!window.results) {
    console.warn('No results available')
    return
  }

  return window.results[randomIntFromInterval(0, window.results.length - 1)]
}

//
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
