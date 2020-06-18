window.event = new Event('results');
document.addEventListener('results', displayResult)
document.querySelector('.reload').addEventListener('click', displayResult)
document.querySelector('.reload').addEventListener('click', spin)

function displayResult() {
  document.getElementById('result').innerHTML = fetchResult()
}

function fetchResult() {
  if (!window.nouns) {
    return 'Loading...'
  }

  let first_word =  window.c_words[randomIntFromInterval(0, window.c_words.length - 1)]
  if (first_word.match(/er/)) {
    return first_word + window.nouns[randomIntFromInterval(0, window.nouns.length - 1)]
  } else {
    return first_word + window.er_words[randomIntFromInterval(0, window.er_words.length - 1)]
  }
}

function spin() {
  document.querySelector('.reload').classList.toggle("spin")
}

//
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
