function translate(string) {
  if (hasNumbers(string)) {
    return string;
  }
}

function hasNumbers(string) {
  var regex = /\d/g;
  return regex.test(string);
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
