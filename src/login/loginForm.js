function SignInForm() {
  if (sessionStorage.id) {
    profile();
  } else {
    if (!document.querySelector(".cover")) {
      const main = document.querySelector("main");
      let cover = document.createElement("div");
      cover.classList.add("cover");
      createLogForm(cover);
      main.append(cover);
    } else {
      let cover = document.querySelector(".cover");
      cover.innerText = "";
      createLogForm(cover);
    }
  }
}
function createLogForm(div) {
  let registerForm = document.createElement("div");
  registerForm.classList.add("signInForm");
  let h2 = document.createElement("h2");
  h2.innerText = "Sign In";
  let p = document.createElement("p");
  p.id = "error";
  let inputs = document.createElement("table");
  inputs.classList.add("inputs");
  SignInputs(inputs);
  let buttonSign = document.createElement("button");
  buttonSign.innerText = "Sign In";
  buttonSign.classList.add("btn");
  buttonSign.onclick = loginValid;
  let closeBtn = document.createElement("div");
  closeBtn.classList.add("close");
  closeBtn.onclick = () => location.reload();
  registerForm.append(h2, p, inputs, buttonSign, closeBtn);
  div.append(registerForm);
}
function SignInputs(table) {
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
  table.append(tremail, trpassword);
}
