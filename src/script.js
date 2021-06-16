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
  SignIn.classList.add("btn");
  const SignUp = document.createElement("button");
  SignUp.innerText = "SignUp";
  SignUp.classList.add("btn");
  SignUp.onclick = RegisterForm;
  const Cart = document.createElement("button");
  Cart.innerText = "Cart";
  Cart.classList.add("btn");
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
    let closeBtn = document.createElement("div");
    closeBtn.classList.add("close");
    closeBtn.onclick = () => location.reload();
    h2.innerText = "Registration";
    let inputs = document.createElement("table");
    inputs.classList.add("inputs");
    regInputs(inputs);
    let regBtn = document.createElement("button");
    regBtn.innerText = "Register";
    regBtn.classList.add("btn");
    registerForm.append(h2, inputs, regBtn, closeBtn);
    cover.append(registerForm);
    main.append(cover);
    count++;
  }
}
function regInputs(div) {
  //<===================Name Input=====================>

  let trname = document.createElement("tr");
  let tdnameLab = document.createElement("td");
  let nameLab = document.createElement("label");
  nameLab.innerText = "Name*";
  nameLab.setAttribute("for", "name");
  tdnameLab.append(nameLab);
  let tdnameInp = document.createElement("td");
  let nameInp = document.createElement("input");
  nameInp.id = "name";
  nameInp.setAttribute("placeholder", "Name");
  tdnameInp.append(nameInp);
  trname.append(tdnameLab, tdnameInp);

  //<===================Surname Input=====================>

  let trsurname = document.createElement("tr");
  let tdsurnameLab = document.createElement("td");
  let surnameLab = document.createElement("label");
  surnameLab.innerText = "Surame*";
  surnameLab.setAttribute("for", "surname");
  tdsurnameLab.append(surnameLab);
  let tdsurnameInp = document.createElement("td");
  let surnameInp = document.createElement("input");
  surnameInp.id = "surname";
  surnameInp.setAttribute("placeholder", "Surnam");
  tdsurnameInp.append(surnameInp);
  trsurname.append(tdsurnameLab, tdsurnameInp);

  //<===================Email Input=====================>

  let tremail = document.createElement("tr");
  let tdemailLab = document.createElement("td");
  let emailLab = document.createElement("label");
  emailLab.innerText = "Email*";
  emailLab.setAttribute("for", "email");
  tdemailLab.append(emailLab);
  let tdemailInp = document.createElement("td");
  let emailInp = document.createElement("input");
  emailInp.id = "email";
  emailInp.setAttribute("placeholder", "Email");

  tdemailInp.append(emailInp);
  tremail.append(tdemailLab, tdemailInp);

  //<===================Phone Input=====================>

  let trphone = document.createElement("tr");
  let tdphoneLab = document.createElement("td");
  let phoneLab = document.createElement("label");
  phoneLab.innerText = "Phone*";
  phoneLab.setAttribute("for", "phone");
  tdphoneLab.append(phoneLab);
  let tdphoneInp = document.createElement("td");
  let phoneInp = document.createElement("input");
  phoneInp.id = "phone";
  phoneInp.setAttribute("placeholder", "Phone Number");
  tdphoneInp.append(phoneInp);
  trphone.append(tdphoneLab, tdphoneInp);

  //<===================Password Input=====================>

  let trpassword = document.createElement("tr");
  let tdpasswordLab = document.createElement("td");
  let passwordLab = document.createElement("label");
  passwordLab.innerText = "Password*";
  passwordLab.setAttribute("for", "password");
  tdpasswordLab.append(passwordLab);
  let tdpasswordInp = document.createElement("td");
  let passwordInp = document.createElement("input");
  passwordInp.id = "password";
  passwordInp.setAttribute("placeholder", "Password");

  passwordInp.setAttribute("type", "password");
  tdpasswordInp.append(passwordInp);
  trpassword.append(tdpasswordLab, tdpasswordInp);
  div.append(trname, trsurname, tremail, trphone, trpassword);
}
run();
