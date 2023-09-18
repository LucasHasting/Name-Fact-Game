// waits for the document to be ready
$(document).ready(click_button)

// function used to click the button
function click_button(){
  $("#button").on("click", button);
}

// main function
function button() {
  // get name
  let name = $("#name").val();

  let score = get_value(name);
  let anagram = get_fact(score, name);

  // update the spirit animal
  $("#spirit_animal").text(decide_spirit_animal(score) + " and your score is " + score);
  $("#fact").text("Fun fact: an anagram of your name is " + anagram);
}

// get the value/score of a name
function get_value(name) {
  let value = 0;
  name = name.toLowerCase();

  for (let i = 0; i < name.length; i++) {
    value += name.charCodeAt(i);
  }

  return value;
}

// uses logic to decide the spirit animal
function decide_spirit_animal(value) {
  let text = "";

  if (value == 0) {
    text = "Your spirit animal is a skunk";
  }
  else if (value < 300) {
    text = "Your spirit animal is a tiger";
  }
  else if (value < 700) {
    text = "Your spirit animal is a giraph";
  }
  else if (value < 1300) {
    text = "Your spirit animal is a dragon";
  }
  else if (value < 1600) {
    text = "Your spirit animal is a leopard";
  }
  else {
    text = "Your spirit animal is a wolf";
  }

  return text;
}

// gets the anagram of the name
function get_fact(score, name) {
  let anagram = name;
  anagram = anagram.toLowerCase();

  if (score == 0) {
    return "idiot";
  }

  for (let i = 0; i < 100000; i++) {
    value1 = Math.floor(Math.random() * (name.length - 0));
    value2 = Math.floor(Math.random() * (name.length - 0));
    let arr = anagram.split('');
    let temp = arr[value1];
    arr[value1] = arr[value2];
    arr[value2] = temp;
    anagram = arr.join('');
  }
  return anagram;
}
