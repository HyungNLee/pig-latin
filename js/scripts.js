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
  if (string.charAt(0) === "a" || string.charAt(0) === "e" || string.charAt(0) === "i" || string.charAt(0) === "o" || string.charAt(0) === "u") {
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
    var newString = string.substr(1, string.length-1);
    newString = newString + string.charAt(0) + "ay";
    return newString;
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
