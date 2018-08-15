var vowelArray=["a","u","i","o","e"];

function translate(string) {
  var returnString;
  if (hasNumbers(string)) {
    return string;
  } else if (checkStarting(string) === "vowel") {
    returnString = ifVowel(string);
    alert(returnString);
  } else if (checkStarting(string) === "consonant") {
    returnString = ifCon(string);
    alert(returnString);
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


$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputBox").val();
    alert(userInput);
    translate(userInput);
  })


  var outputResult;
})
