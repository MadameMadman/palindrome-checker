function reverseString(myString) {
  var rString = "";
  var holder = myString.length;
  for (var i = holder ; i > 0 ; i--){
    rString += myString.charAt(i-1)
  };
  return rString;
}

function palindrome(myString){
  return (myString === reverseString(myString));
}

function result(){
  var aStr = document.palinForm.inputWord.value;
  document.palinForm.outputWord.value = reverseString(aStr);
  document.palinForm.isPalin.value = palindrome(aStr);
  return true;
}

$(document).ready(function() {
  $("form#words").submit(function(event) {
    event.preventDefault();
    var myString = ($("input#myString").val());
    var result = palindrome(myString);

    $(".myString").text(myString);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
