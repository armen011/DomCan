function run() {
  let header = document.querySelector(".header");
  let logo = document.createElement("div");
  logo.classList.add("logo");
  importLogo(logo);
  let search = document.createElement("div");
  search.classList.add("searchbar");
  importSearch(search);
  let nav = document.createElement("div");
  nav.classList.add("navbar");
  importNav(nav);
  header.append(logo, search, nav);
}
const importLogo = (div) => {
  let h1 = (document.createElement("h1").innerHTML = "HealthyFood");
  div.append(h1);
};
const importSearch = (div) => {
  let searchcomp = document.createElement("div");
  searchcomp.classList.add("searchcomp");
  let input = document.createElement("input");
  input.placeholder = "Write to Search";
  let btn = document.createElement("button");
  let i = document.createElement("i");
  i.classList.add("fa-search");
  i.classList.add("fa");

  btn.append(i);
  searchcomp.append(input, btn);
  div.append(searchcomp);
};
const importNav = (div) => {
  const SignIn = document.createElement("button");
  SignIn.innerText = "SignIn";
  SignIn.onclick = SignInForm;
  const SignUp = document.createElement("button");
  SignUp.innerText = "SignUp";
  SignUp.onclick = RegisterForm;
  const Cart = document.createElement("button");
  Cart.innerText = "Cart";
  div.append(SignIn, SignUp, Cart);
};
let count = 0;
function RegisterForm() {
  if (count === 0) {
    const main = document.querySelector("main");
    let cover = document.createElement("div");
    cover.classList.add("cover");
    let registerForm = document.createElement("div");
    registerForm.classList.add("registerForm");
    let h2 = document.createElement("h2");
    h2.innerText = "Registration";
    let inputs = document.createElement("div");
    inputs.classList.add("inputs");
    regInputs(inputs);
    registerForm.append(h2, inputs);
    cover.append(registerForm);
    main.append(cover);
    count++;
  }
}
function regInputs(div) {
  let nameLab = document.createElement("label");
  nameLab.innerText = "Name*";
  let nameInp = document.createElement("input");
  nameLab.append(nameInp);
  let surnameLab = document.createElement("label");
  surnameLab.innerText = "Surname*";
  let surnameInp = document.createElement("input");
  surnameLab.append(surnameInp);
  let emailLab = document.createElement("label");
  emailLab.innerText = "Email*";
  let emailInp = document.createElement("input");
  emailLab.append(emailInp);
  let phoneLab = document.createElement("label");
  phoneLab.innerText = "Phone*";
  let phoneInp = document.createElement("input");
  phoneLab.append(phoneInp);
  let passwordLab = document.createElement("label");
  passwordLab.innerText = "Password*";
  let passwordInp = document.createElement("input");
  passwordLab.append(passwordInp);
  div.append(nameLab, surnameLab, emailLab, phoneLab, passwordLab);
}

let countSign = 0;
function SignInForm() {
  if (countSign === 0) {
    const main = document.querySelector("main");
    let cover = document.createElement("div");
    cover.classList.add("cover");
    let registerForm = document.createElement("div");
    registerForm.classList.add("signInForm");
    let h2 = document.createElement("h2");
    h2.innerText = "Sign In";
    let inputs = document.createElement("table");
    inputs.classList.add("inputs");
    SignInputs(inputs);
    registerForm.append(h2, inputs);
    cover.append(registerForm);
    main.append(cover);
    countSign++;
  }
}

function SignInputs(table) {
  let trEmail = document.createElement("tr");
  let tdLabelEmail = document.createElement("td");
  let emailLab = document.createElement("label");
  emailLab.innerText = "Email*";
  tdLabelEmail.append(emailLab);
  let tdInputEmail = document.createElement("td");
  let emailInp = document.createElement("input");
  emailInp.setAttribute("placeholder", "Email")
  tdInputEmail.append(emailInp);
  trEmail.append(tdLabelEmail, tdInputEmail);

  let trPassword = document.createElement("tr");
  let tdLabelPassword = document.createElement("td");
  let passwordLab = document.createElement("label");
  passwordLab.innerText = "Password*";
  tdLabelPassword.append(passwordLab);

  let tdInputPassword = document.createElement("td");
  let passwordInp = document.createElement("input");
  passwordInp.setAttribute("placeholder", "Password")

  tdInputPassword.append(passwordInp);
  trPassword.append(tdLabelPassword, tdInputPassword);

  let buttonSign = document.createElement("button");
  buttonSign.innerText = "Sign In";
  buttonSign.classList.add("signIn-button");
  table.append(trEmail, trPassword, buttonSign);
}

run();
