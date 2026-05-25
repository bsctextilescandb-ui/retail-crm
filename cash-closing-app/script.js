let enteredPin = "";

window.onload = function() {

  const authenticated =
    sessionStorage.getItem("authenticated");

  if(authenticated) {

    if(checkAuthentication()) {

      openApp();

    }

  }

};

function press(number){

  if(enteredPin.length >= 4) return;

  enteredPin += number;

  updateDots();

  if(enteredPin.length === 4){

    validatePin();

  }

}

function removeDigit(){

  enteredPin =
    enteredPin.slice(0, -1);

  updateDots();

}

function updateDots(){

  for(let i = 1; i <= 4; i++){

    const dot =
      document.getElementById(`dot${i}`);

    if(i <= enteredPin.length){

      dot.classList.add("active");

    } else {

      dot.classList.remove("active");

    }

  }

}

function validatePin(){

  const valid =
    authenticate(enteredPin);

  if(valid){

    openApp();

  } else {

    alert("Invalid PIN");

    enteredPin = "";

    updateDots();

  }

}

function openApp(){

  document.querySelector(
    ".login-container"
  ).style.display = "none";

  document.getElementById(
    "appScreen"
  ).style.display = "block";

}
