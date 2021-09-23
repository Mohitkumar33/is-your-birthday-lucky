const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-button");
const textArea = document.querySelector("#text-area");

textArea.style.display = "none";

function displayMessage(msg) {
  textArea.style.display = "block";
  textArea.innerText = msg;
}

function luckNumberLogic(sum, luckNo) {
  if (sum % luckNo === 0) {
    displayMessage(
      "Congrulations " + luckNo + " is lucky number🥳🥳🥳🥳🎉🎉🎉🎉"
    );
  } else {
    displayMessage("Sorry " + luckNo + " is not a lucky Number 🤦‍♂️");
  }
}

function luckyCalculation() {
  if (luckyNumber.value && dateOfBirth.value) {
    var date = dateOfBirth.value;
    date = date.replaceAll("-", "");
    var sum = 0;
    for (let i = 0; i < date.length; i++) {
      sum = sum + Number(date[i]);
    }
    luckNumberLogic(sum, parseInt(luckyNumber.value));
  } else {
    displayMessage("Enter both the fields 😅");
  }
}

checkNumber.addEventListener("click", luckyCalculation);
