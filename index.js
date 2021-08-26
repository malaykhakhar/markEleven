const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector(".output");

function compareValues(sum, num) {
  if (sum % num === 0) {
    output.innerHTML = "Yeay! Your birthday is lucky.";
  } else {
    output.innerHTML = "Your birthday is not lucky."
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return (sum);
}

function isYourBirthdayLucky() {
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  compareValues(sum, Number(luckyNumber.value));
}

checkButton.addEventListener("click", isYourBirthdayLucky);