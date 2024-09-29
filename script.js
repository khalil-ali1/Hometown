var array, PLACES;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


array = ['empty', 'empty', 'empty', 'empty', 'empty'];
PLACES = 5;
let element_ADD_MORE = document.getElementById('ADD-MORE');
element_ADD_MORE.innerText = PLACES;


document.getElementById('add').addEventListener('click', (event) => {
  if (PLACES > 0) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = document.getElementById('text').value;

    element_list.appendChild(new_li);
    array.push(document.getElementById('text').value);
    array.shift();
    PLACES = (typeof PLACES === 'number' ? PLACES : 0) + -1;
    let element_ADD_MORE2 = document.getElementById('ADD-MORE');
    element_ADD_MORE2.innerText = PLACES;
  } else {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('THE LIST IS FULL!'));
  }

});

document.getElementById('select').addEventListener('click', (event) => {
  let element_choice = document.getElementById('choice');
  element_choice.innerText = randomMember(array);

});