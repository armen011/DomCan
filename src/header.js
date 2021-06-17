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
  if (sessionStorage.id) {
    SignIn.innerText = "Profile";
  } else {
    SignIn.innerText = "SignIn";
  }
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

function showItems(div) {
  if (Item.getItems()) {
    let items = Item.getItems();
    items.map((elm) => {
      let item = document.createElement("div");
      item.className = "itemToShow";
      let imgDiv = document.createElement("div");
      imgDiv.className = "imgDiv";
      let img = document.createElement("img");
      img.src = elm.img;
      imgDiv.append(img);
      let title = document.createElement("p");
      title.innerText = "Title` " + elm.title;
      title.className = "showTitle";
      let price = document.createElement("p");
      price.innerText = "Price" + elm.price;
      let qnt = document.createElement("p");
      qnt.innerText = "Qnt` " + elm.qnt;
      item.append(imgDiv, title, price, qnt);
      div.append(item);
    });
  } else {
  }
}
