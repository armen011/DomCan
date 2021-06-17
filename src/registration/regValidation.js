function regValidation() {
  //<===============Name================>
  let firstName = document.querySelector("#name").value;
  let regName = document.querySelector(".regName");
  let regNameInptd = document.querySelector(".regNameInptd ");

  //<===============Surname=============>
  let secondName = document.querySelector("#surname").value;
  let regSurname = document.querySelector(".regSurname");
  let regSurnameInptd = document.querySelector(".regSurnameInptd ");

  //<===============Email===============>
  let email = document.querySelector("#email").value;
  let regEmail = document.querySelector(".regEmail");
  let regEmailInptd = document.querySelector(".regEmailInptd ");

  //<===============Phone===============>
  let phone = document.querySelector("#phone").value;
  let regPhone = document.querySelector(".regPhone");
  let regPhoneInptd = document.querySelector(".regPhoneInptd ");

  //<===============Password============>
  let password = document.querySelector("#password").value;
  let regPassword = document.querySelector(".regPassword");
  let regPasswordInptd = document.querySelector(".regPasswordInptd ");

  //--------------------------------------------------------------------------------------
  let registerForm = document.querySelector(".registerForm");
  let err = document.querySelector("#error");
  err.innerText = "";
  let bool = true;
  //-----------------------------------------------------------------------------------
  //<=================NameValid========================>
  if (firstName.length === 0) {
    err.innerText = "Be careful*";
    regName.style.color = "red";
    regNameInptd.innerText = "Required*";
    bool = false;
  } else if (firstName.length < 3) {
    err.innerText = "Be careful*";
    regName.style.color = "red";
    regNameInptd.innerText = "Too short";
    bool = false;
  } else {
    regName.style.color = "green";
    regNameInptd.innerText = "";
  }
  //<=================SurnameValid=====================>
  if (secondName.length === 0) {
    err.innerText = "Be careful*";
    regSurname.style.color = "red";
    regSurnameInptd.innerText = "Required*";
    bool = false;
  } else if (secondName.length < 3) {
    err.innerText = "Be careful*";
    regSurname.style.color = "red";
    regSurnameInptd.innerText = "Too short";
    bool = false;
  } else {
    regSurname.style.color = "green";
    regSurnameInptd.innerText = "";
  }
  //<=================EmailValid=====================>
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
  //<=================PhoneValid=====================>
  if (phone.length === 0) {
    err.innerText = "Be careful*";
    regPhone.style.color = "red";
    regPhoneInptd.innerText = "Required*";
    bool = false;
  } else if (phone.length === 8 && phone[0] !== "0") {
    regPhone.style.color = "green";
    regPhoneInptd.innerText = "";
    phone = "+374" + phone;
  } else if (phone.length === 9 && phone[0] == "0") {
    regPhone.style.color = "green";
    regPhoneInptd.innerText = "";
    phone = "+374" + phone.substring(1, 9);
  } else if (
    phone.length === 12 &&
    phone.substring(0, 4) == "+374" &&
    phone[4] != 0
  ) {
    regPhone.style.color = "green";
    regPhoneInptd.innerText = "";
  } else if (
    phone.length === 11 &&
    phone.substring(0, 3) == "374" &&
    phone[3] != 0
  ) {
    regPhone.style.color = "green";
    regPhoneInptd.innerText = "";
    phone = "+" + phone;
  } else {
    err.innerText = "Be careful*";
    regPhone.style.color = "red";
    regPhoneInptd.innerText = "Not Valid";
    bool = false;
  }
  //<=================PasswordValid==================>

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
    if (User.checkEmail(email)) {
      let user = new User(
        firstLetterUppercase(firstName),
        firstLetterUppercase(secondName),
        email,
        phone,
        password
      );
      registerForm.innerText = "";
      showMsg(registerForm);
    } else {
      err.innerText = "This email address is used*";
    }
  }
}
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function firstLetterUppercase(word) {
  let res = "";
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      res += word[i].toUpperCase();
    } else {
      res += word[i].toLowerCase();
    }
  }
  return res;
}
function showMsg(div) {
  sessionStorage.clear();
  let p = document.createElement("p");
  p.classList.add("sucP");
  p.innerText = "You have successfuly registerd.Log in to add  Items.";
  let i = document.createElement("i");
  i.classList.add("fa-check-circle");
  i.classList.add("fa");
  i.style = "font-size:160px;color:green";
  let closeBtn = document.createElement("div");
  closeBtn.classList.add("close");
  closeBtn.onclick = () => location.reload();
  const SignIn = document.createElement("button");
  SignIn.innerText = "SignIn";
  SignIn.classList.add("btn");
  SignIn.onclick = SignInForm;
  div.append(i, p, SignIn, closeBtn);
}
