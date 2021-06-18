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
  importFooter();
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

const importFooter = () => {
  const footer = document.querySelector(".footer");
  const icons = document.createElement("div");
  const copyWrite = document.createElement("div");
  icons.classList.add("icons");
  copyWrite.classList.add("copyWrite");

  // const ul = document.createElement("ul");
  // const li = document.createElement("li");
  // const li1 = document.createElement("li");
  // const li2 = document.createElement("li");
  // const li3 = document.createElement("li");
  // ul.classList.add("ul");
  // li.innerText = "Yerevan";
  // li1.innerText = "yerevan.@gmail.com";
  // li2.innerText = "+555 555 555";
  // li3.innerText = "© 2021";

  // ul.append(li, li1, li2, li3, ic1);

  const firstDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const thirdDiv = document.createElement("div");
  const fourthDiv = document.createElement("div");

  const ic1 = document.createElement("icon");
  ic1.classList.add("mapClass");
  ic1.classList.add("fa");
  ic1.classList.add("fa-map-marker");
  ic1.classList.add("fa-3x");
  const mapText = document.createElement("p");
  mapText.classList.add("mapText");
  mapText.innerText = "Yerevan,Armenia";
  firstDiv.append(ic1, mapText);
  firstDiv.classList.add("first");
  copyWrite.append(firstDiv);

  // const icFirst = document.createElement("icon");
  // icFirst.classList.add("icFirst");
  // mapClass.append("mapText");
  // copyWrite.append("mapClass")

  const ic2 = document.createElement("icon");
  ic2.classList.add("mapClass");
  ic2.classList.add("fa");
  ic2.classList.add("fa-paper-plane");
  ic2.classList.add("fa-3x");
  const message = document.createElement("p");
  message.classList.add("message");
  message.innerText = "yerevan@gmail.com";
  secondDiv.append(ic2, message);
  secondDiv.classList.add("second");
  copyWrite.append(secondDiv);

  const ic3 = document.createElement("icon");
  ic3.classList.add("mapClass");
  ic3.classList.add("fa");
  ic3.classList.add("rotate-icon");
  ic3.classList.add("fa-phone");
  ic3.classList.add("fa-3x");
  const call = document.createElement("p");
  call.classList.add("call");
  call.innerText = "+374 10 11 11 11";
  thirdDiv.append(ic3, call);
  thirdDiv.classList.add("third");
  copyWrite.append(thirdDiv);

  const ic4 = document.createElement("icon");
  ic4.classList.add("mapClass")
  ic4.classList.add("copy");
  ic4.classList.add("fa");
  ic4.classList.add("fa-copyright");
  ic4.classList.add("fa-3x");
  const copy = document.createElement("p");
  copy.classList.add("copyText");
  copy.innerText = "copyWrite 2021";
  fourthDiv.append(ic4, copy);
  fourthDiv.classList.add("fourth");
  copyWrite.append(fourthDiv);

  const icon1 = document.createElement("icon");
  icon1.classList.add("fa");
  icon1.classList.add("fa-facebook");
  icon1.classList.add("fa-3x");
  icons.append(icon1);

  const icon2 = document.createElement("icon");
  icon2.classList.add("fa");
  icon2.classList.add("fa-youtube");
  icon2.classList.add("fa-3x");
  icons.append(icon2);

  const icon3 = document.createElement("icon");
  icon3.classList.add("fa");
  icon3.classList.add("fa-instagram");
  icon3.classList.add("fa-3x");
  icons.append(icon3);

  const icon4 = document.createElement("icon");
  icon4.classList.add("fa");
  icon4.classList.add("fa-twitter");
  icon4.classList.add("fa-3x");
  icons.append(icon4);

  // copyWrite.append(ul);
  footer.append(copyWrite, icons);
};
run();
