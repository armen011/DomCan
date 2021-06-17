function RegisterForm() {
  if (!document.querySelector(".cover")) {
    const main = document.querySelector("main");
    let cover = document.createElement("div");
    cover.classList.add("cover");
    createRegForm(cover);
    main.append(cover);
  } else {
    let cover = document.querySelector(".cover");
    cover.innerText = "";
    createRegForm(cover);
  }
}
const createRegForm = (div) => {
  let registerForm = document.createElement("div");
  registerForm.classList.add("registerForm");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  p.id = "error";
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
  regBtn.onclick = regValidation;
  registerForm.append(h2, p, inputs, regBtn, closeBtn);
  div.append(registerForm);
};
function regInputs(div) {
  //<===================Name Input=====================>

  let trname = document.createElement("tr");
  trname.classList.add("regName");
  let tdnameLab = document.createElement("td");
  let nameLab = document.createElement("label");
  nameLab.innerText = "Name*";
  nameLab.setAttribute("for", "name");
  tdnameLab.append(nameLab);
  let tdnameInp = document.createElement("td");
  let nameInp = document.createElement("input");
  nameInp.id = "name";
  let nameP = document.createElement("p");
  nameP.classList.add("regNameInptd");
  nameInp.setAttribute("placeholder", "Name");
  tdnameInp.append(nameInp, nameP);
  trname.append(tdnameLab, tdnameInp);

  //<===================Surname Input=====================>

  let trsurname = document.createElement("tr");
  trsurname.classList.add("regSurname");
  let tdsurnameLab = document.createElement("td");
  let surnameLab = document.createElement("label");
  surnameLab.innerText = "Surame*";
  surnameLab.setAttribute("for", "surname");
  tdsurnameLab.append(surnameLab);
  let tdsurnameInp = document.createElement("td");
  let surnameInp = document.createElement("input");
  surnameInp.id = "surname";
  let surnameP = document.createElement("p");
  surnameP.classList.add("regSurnameInptd");
  surnameInp.setAttribute("placeholder", "Surname");
  tdsurnameInp.append(surnameInp, surnameP);
  trsurname.append(tdsurnameLab, tdsurnameInp);

  //<===================Email Input=====================>

  let tremail = document.createElement("tr");
  tremail.classList.add("regEmail");
  let tdemailLab = document.createElement("td");
  let emailLab = document.createElement("label");
  emailLab.innerText = "Email*";
  emailLab.setAttribute("for", "email");
  tdemailLab.append(emailLab);
  let tdemailInp = document.createElement("td");
  let emailInp = document.createElement("input");
  emailInp.id = "email";
  let emailP = document.createElement("p");
  emailP.classList.add("regEmailInptd");
  emailInp.setAttribute("placeholder", "Email");
  tdemailInp.append(emailInp, emailP);
  tremail.append(tdemailLab, tdemailInp);

  //<===================Phone Input=====================>

  let trphone = document.createElement("tr");
  trphone.classList.add("regPhone");
  let tdphoneLab = document.createElement("td");
  let phoneLab = document.createElement("label");
  phoneLab.innerText = "Phone*";
  phoneLab.setAttribute("for", "phone");
  tdphoneLab.append(phoneLab);
  let tdphoneInp = document.createElement("td");
  let phoneInp = document.createElement("input");
  phoneInp.id = "phone";
  let phoneP = document.createElement("p");
  phoneP.classList.add("regPhoneInptd");
  phoneInp.setAttribute("placeholder", "Phone Number");
  tdphoneInp.append(phoneInp, phoneP);
  trphone.append(tdphoneLab, tdphoneInp);

  //<===================Password Input=====================>

  let trpassword = document.createElement("tr");
  trpassword.classList.add("regPassword");
  let tdpasswordLab = document.createElement("td");
  let passwordLab = document.createElement("label");
  passwordLab.innerText = "Password*";
  passwordLab.setAttribute("for", "password");
  tdpasswordLab.append(passwordLab);
  let tdpasswordInp = document.createElement("td");
  let passwordInp = document.createElement("input");
  passwordInp.id = "password";
  let passwordP = document.createElement("p");
  passwordP.classList.add("regPasswordInptd");
  passwordInp.setAttribute("placeholder", "Password");
  passwordInp.setAttribute("type", "password");
  tdpasswordInp.append(passwordInp, passwordP);
  trpassword.append(tdpasswordLab, tdpasswordInp);
  div.append(trname, trsurname, tremail, trphone, trpassword);
}
