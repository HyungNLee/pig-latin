var vowelArray=["a","u","i","o","e","A","U","I","O","E"];

function translate(string) {
  var returnString;
  if (hasNumbers(string)) {
    return string;
  } else if (checkStarting(string) === "vowel") {
    returnString = ifVowel(string);
    return returnString;
  } else if (checkStarting(string) === "consonant") {
    returnString = ifCon(string);
    return returnString;
  }
}

//Check if string has a number
function hasNumbers(string) {
  var regex = /\d/g;
  return regex.test(string);
}

//Checks if starting character is a vowel or consonant
function checkStarting(string) {
  if (vowelArray.includes(string.charAt(0))) {
    return "vowel"
  } else {
    return "consonant"
  }
}

//Function for string starting with vowel
function ifVowel(string) {
  if (string.length === 1) {
    string = string + "ay";
    return string;
  } else if (string.length > 1) {
    string = string + "yay";
    return string;
  }
}

//Function for string starting with consonant
function ifCon(string) {
  if (string.length === 1) {
    return string;
  } else if (string.length > 1) {
    for (i = 0; i < string.length; i++) {
      if (checkIfVowel(string, i)) {
        if (quCheck(string, i)) {
          i = i + 1;
        }
        var endString = string.substr(i);
        var begString = string.substr(0, i);
        var returnString = endString + begString + "ay";
        return returnString;
      }
    }
  }
}

//Checks if consonant ends in "qu"
function quCheck(string, i){
  if (string.substr(i - 1, 2) === "qu") {
    return true;
  } else {
    return false;
  }
}

//Function for checking if it a vowel
function checkIfVowel(string, i) {
  if (vowelArray.includes(string.charAt(i))) {
    return true;
  } else {
    return false;
  }
}

//Runs translate function for each word in input array
function eachWord(array){
  var translatedArray = [];

  array.forEach(function(word) {
    translatedArray.push(translate(word));
  })

  var translatedString = translatedArray.join(" ");
  translatedString = translatedString.toLowerCase();
  var returnString = translatedString.charAt(0).toUpperCase() + translatedString.substr(1);

  return returnString;
}


$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputBox").val();
    var inputArray = userInput.split(" ");

    var outputResult = eachWord(inputArray);

    $(".output").text(outputResult);
  })
})
