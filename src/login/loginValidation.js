const loginValid = () => {
  //<===============Email===============>
  let email = document.querySelector("#email").value;
  let regEmail = document.querySelector(".regEmail");
  let regEmailInptd = document.querySelector(".regEmailInptd ");

  //<===============Password============>
  let password = document.querySelector("#password").value;
  let regPassword = document.querySelector(".regPassword");
  let regPasswordInptd = document.querySelector(".regPasswordInptd ");

  let err = document.querySelector("#error");
  err.innerText = "";
  let bool = true;

  //<============================EmailValid==================================>
  if (email.length === 0) {
    err.innerText = "Be careful*";
    regEmail.style.color = "red";
    regEmailInptd.innerText = "Required*";
    bool = false;
  } else if (!validateEmail(email)) {
    err.innerText = "Be careful*";
    regEmail.style.color = "red";
    regEmailInptd.innerText = "Not Valid";
    bool = false;
  } else {
    regEmail.style.color = "green";
    regEmailInptd.innerText = "";
  }
  //<============================PasswordValid===============================>
  if (password.length === 0) {
    err.innerText = "Be careful*";
    regPassword.style.color = "red";
    regPasswordInptd.innerText = "Required*";
    bool = false;
  } else if (password.length < 8) {
    err.innerText = "Be careful*";
    regPassword.style.color = "red";
    regPasswordInptd.innerText = "Too short";
    bool = false;
  } else {
    regPassword.style.color = "green";
    regPasswordInptd.innerText = "";
  }
  if (bool) {
    if (User.LogIn(email, password)) {
      profile();
    } else {
      err.innerText = "Wrong email or password";
    }
  }
};
