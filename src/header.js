const importLogo = (div) => {
  let h1 = (document.createElement("h1").innerHTML = "HealthyFood");
  div.append(h1);
};
const importSearch = (div) => {
  let searchcomp = document.createElement("div");
  searchcomp.classList.add("searchcomp");
  let input = document.createElement("input");
  input.addEventListener('keyup', (e) => search(e))
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
  Cart.onclick = CartForm;
  div.append(SignIn, SignUp, Cart);
};

function showItems(div) {
  if (Item.getItems()) {
    let items = Item.getItems();
    const container = document.createElement('div')
    container.classList.add('content')
    items.map((elm) => {
      let item = document.createElement("div");
      item.className = "itemToShowMain";
      let imgDiv = document.createElement("div");
      imgDiv.className = "imgDiv";
      let img = document.createElement("img");
      img.src = elm.img;
      imgDiv.append(img);
      let title = document.createElement("p");
      title.innerText = elm.title;
      title.className = "showTitle";
      let price = document.createElement("p");
      price.innerText = "Price" + elm.price;
      let qnt = document.createElement("p");
      qnt.innerText = "Qnt` " + elm.qnt;
      let btn = document.createElement('button')
      btn.innerText = 'To Cart'
      btn.onclick = () => { Item.addToCart(elm.id) }
      btn.classList.add('btn')
      item.append(imgDiv, title, price, qnt, btn);
      container.append(item);
    });
    div.append(container)
  } else {
  }
}
function search(e) {
  const filter = e.target.value
  if (!document.querySelector(".cover")) {
    const main = document.querySelector("main");
    let cover = document.createElement("div");
    cover.onclick = run
    cover.classList.add("cover");
    const searchResult = document.createElement('div')
    addSearchResult(searchResult)
    searchResult.classList.add('searchResult')
    cover.append(searchResult)
    main.append(cover);
  } else {
    let cover = document.querySelector(".cover");
    cover.innerText = "";
    if (!document.querySelector('.searchResult')) {
      const searchResult = document.createElement('div')
      addSearchResult(searchResult)
      searchResult.classList.add('searchResult')
      cover.append(searchResult)
    } else {
      const searchResult = document.querySelector('.searchResult')
      searchResult.innerHTML = ''
      addSearchResult(searchResult)
      cover.append(searchResult)
    }
  }
  function addSearchResult(div) {
    div.addEventListener('click', (e) => e.stopPropagation())
    const res = Item.search(filter)
    if (res.length > 0) {
      const table = document.createElement('table')
      let tr, td

      res.forEach((elm) => {
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerText = elm.title
        tr.append(td)
        td = document.createElement('td')
        td.innerText = elm.price + '$'
        tr.append(td)
        td = document.createElement('td')
        td.innerText = elm.qnt
        tr.append(td)
        td = document.createElement('td')
        let btn = document.createElement('button')
        btn.innerText = 'To Cart'
        btn.onclick = () => { Item.addToCart(elm.id) }
        btn.classList.add('btn')
        td.append(btn)
        tr.append(td)
        table.append(tr)
      })
      div.append(table)

    } else {
      const h3 = document.createElement('h3')
      h3.innerText = 'No item was found'
      div.append(h3)
    }

  }

}


