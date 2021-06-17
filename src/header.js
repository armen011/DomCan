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
