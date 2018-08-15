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
    for (i = 0; i < string.length; i++) {
      alert(i);
      if (checkIfVowel(string, i)) {
        var endString = string.substr(i);
        var begString = string.substr(0, i);
        alert(begString);
        var returnString = endString + begString + "ay";
        return returnString;
      }
    }
  }
}

//Function for checking if it a vowel
function checkIfVowel(string, i) {
  if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
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
