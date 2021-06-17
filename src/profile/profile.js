function profile() {
  if (!document.querySelector(".cover")) {
    const main = document.querySelector("main");
    let cover = document.createElement("div");
    cover.classList.add("cover");
    createProfile(cover);
    main.append(cover);
  } else {
    let cover = document.querySelector(".cover");
    cover.innerText = "";
    createProfile(cover);
  }
}
createProfile = (div) => {
  let profileForm = document.createElement("div");
  profileForm.classList.add("profileForm");

  //<==========Header2================>
  let h2 = document.createElement("h2");
  h2.innerText = "Profile";

  //<==========ProfileMain================>
  let main = document.createElement("div");
  main.classList.add("profileMain");

  //<==========Info================>
  let info = document.createElement("div");
  info.classList.add("profileInfo");
  importInfo(info);

  //<==========AddItem================>
  let addItem = document.createElement("div");
  addItem.classList.add("profileAddItem");
  importAddItems(addItem);
  //<==========HeaderItems================>
  let headerItem = document.createElement("h3");
  headerItem.innerText = "Your Items";

  //<==========Items================>
  let items = document.createElement("div");
  items.classList.add("profileItems");
  addUserItems(items);

  //<==========CloseBtn================>
  let closeBtn = document.createElement("div");
  closeBtn.classList.add("close");
  closeBtn.onclick = () => location.reload();

  //<==========Appending================>
  main.append(info, addItem, headerItem, items);
  profileForm.append(h2, main, closeBtn);
  div.append(profileForm);
};
const importInfo = (div) => {
  const user = User.getUserInfo();

  //<===========Name=========================>
  let name = document.createElement("h2");
  name.append(user.name, " ", user.surname);
  name.classList.add("profileName");

  //<===========Email========================>
  let email = document.createElement("p");
  email.append("Email ` ", user.email);
  email.classList.add("profileemail");
  //<===========Phone========================>
  let phone = document.createElement("p");
  phone.append("Phone ` ", user.phone);
  phone.classList.add("profilePhone");
  //<==========Appending================>
  div.append(name, email, phone);
};
const importAddItems = (div) => {
  //<===========Header2=========================>
  let header = document.createElement("h2");
  header.innerText = "Add Items";
  header.classList.add("profileAddItemHeader");

  //<===========Table=========================>
  let table = document.createElement("table");
  table.classList.add("profileAddItemTable");

  //<===========Tr/Td=========================>
  //<====Title====>
  let trTitle = document.createElement("tr");
  trTitle.classList.add("profileAddItemTitleTr");
  //<====Label===>
  let tdTitleLab = document.createElement("td");
  tdTitleLab.classList.add("profileAddItemTitleLabTd");
  titleLab = document.createElement("label");
  titleLab.setAttribute("for", "title");
  titleLab.innerText = "Title";
  tdTitleLab.append(titleLab);
  //<====Input===>
  let tdTitleInp = document.createElement("td");
  tdTitleInp.classList.add("profileAddItemTitleInpTd");
  titleInp = document.createElement("input");
  titleInp.setAttribute("placeholder", "Title");
  titleInp.id = "title";
  let titleP = document.createElement("p");
  titleP.classList.add("titleP");
  titleP.classList.add("errAdP");
  tdTitleInp.append(titleInp, titleP);
  //<====TrAppending===>
  trTitle.append(tdTitleLab, tdTitleInp);

  //<====price====>
  let trPrice = document.createElement("tr");
  trPrice.classList.add("profileAddItemPriceTr");
  //<====Label===>
  let tdPriceLab = document.createElement("td");
  tdPriceLab.classList.add("profileAddItemPriceLabTd");
  priceLab = document.createElement("label");
  priceLab.setAttribute("for", "price");
  priceLab.innerText = "Price";
  tdPriceLab.append(priceLab);
  //<====Input===>
  let tdPriceInp = document.createElement("td");
  tdPriceInp.classList.add("profileAddItempriceInpTd");
  priceInp = document.createElement("input");
  priceInp.setAttribute("placeholder", "Price");
  priceInp.id = "price";
  let priceP = document.createElement("p");
  priceP.classList.add("priceP");
  priceP.classList.add("errAdP");
  tdPriceInp.append(priceInp, priceP);
  //<====TrAppending===>
  trPrice.append(tdPriceLab, tdPriceInp);

  //<====Qnt====>
  let trQnt = document.createElement("tr");
  trQnt.classList.add("profileAddItemQntTr");
  //<====Label===>
  let tdQntLab = document.createElement("td");
  tdQntLab.classList.add("profileAddItemQntLabTd");
  qntLab = document.createElement("label");
  qntLab.setAttribute("for", "qnt");
  qntLab.innerText = "Qnt";
  tdQntLab.append(qntLab);
  //<====Input===>
  let tdQntInp = document.createElement("td");
  tdQntInp.classList.add("profileAddItemQntInpTd");
  qntInp = document.createElement("input");
  qntInp.setAttribute("placeholder", "Qnt");
  qntInp.id = "qnt";
  let qntP = document.createElement("p");
  qntP.classList.add("qntP");
  qntP.classList.add("errAdP");
  tdQntInp.append(qntInp, qntP);
  //<====TrAppending===>
  trQnt.append(tdQntLab, tdQntInp);

  //<====Img====>
  let trImg = document.createElement("tr");
  trImg.classList.add("profileAddItemImgTr");
  //<====Label===>
  let tdImgLab = document.createElement("td");
  tdImgLab.classList.add("profileAddItemImgLabTd");
  imgLab = document.createElement("label");
  imgLab.setAttribute("for", "img");
  imgLab.innerText = "Img";
  tdImgLab.append(imgLab);
  //<====Input===>
  let tdImgInp = document.createElement("td");
  tdImgInp.classList.add("profileAddItemImgInpTd");
  imgInp = document.createElement("input");
  imgInp.setAttribute("placeholder", "Img URL");
  imgInp.id = "img";
  let imgP = document.createElement("p");
  imgP.classList.add("imgP");
  imgP.classList.add("errAdP");

  tdImgInp.append(imgInp, imgP);
  //<====TrAppending===>
  trImg.append(tdImgLab, tdImgInp);

  //<================SubmitButton============>
  let button = document.createElement("button");
  button.innerText = "AddItem";
  button.classList.add("btn");
  button.onclick = itemValid;

  //<==========Appending================>
  table.append(trTitle, trPrice, trQnt, trImg);
  div.append(header, table, button);
};
const itemValid = () => {
  let bool = true;
  //<==========TitleValid=========>
  let title = document.querySelector("#title").value;
  let titleErr = document.querySelector(".titleP");
  let titleTr = document.querySelector(".profileAddItemTitleTr");
  if (title.length === 0) {
    titleTr.style.color = "red";
    titleErr.innerText = "Req *";
    bool = false;
  } else if (title.length < 3) {
    titleTr.style.color = "red";
    titleErr.innerText = "Too short";
    bool = false;
  } else {
    titleTr.style.color = "green";
    titleErr.innerText = "";
  }
  //<==========PriceValid=========>
  let price = document.querySelector("#price").value;
  let priceErr = document.querySelector(".priceP");
  let priceTr = document.querySelector(".profileAddItemPriceTr");
  if (price.length === 0) {
    priceTr.style.color = "red";
    priceErr.innerText = "Req *";
    bool = false;
  } else if (!validatePrice(price)) {
    priceTr.style.color = "red";
    priceErr.innerText = "Not Valid";
    bool = false;
  } else {
    priceTr.style.color = "green";
    priceErr.innerText = "";
  }
  //<==========QntValid=========>
  let qnt = document.querySelector("#qnt").value;
  let qntErr = document.querySelector(".qntP");
  let qntTr = document.querySelector(".profileAddItemQntTr");
  if (qnt.length === 0) {
    qntTr.style.color = "red";
    qntErr.innerText = "Req *";
    bool = false;
  } else if (!validatePrice(qnt)) {
    qntTr.style.color = "red";
    qntErr.innerText = "Not Valid";
    bool = false;
  } else {
    qntTr.style.color = "green";
    qntErr.innerText = "";
  }
  //<==========imgValid=========>
  let img = document.querySelector("#img").value;
  let imgErr = document.querySelector(".imgP");
  let imgTr = document.querySelector(".profileAddItemImgTr");
  if (img.length === 0) {
    imgTr.style.color = "red";
    imgErr.innerText = "Req *";
    bool = false;
  } else {
    imgTr.style.color = "green";
    imgErr.innerText = "";
  }
  if (bool) {
    let item = new Item(title, price, qnt, img);
    alert("Item is Added");
  }
};
function validatePrice(price) {
  const re = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
  return re.test(String(price).toLowerCase());
}
function addUserItems(div) {
  if (Item.getItems("unique")) {
    let items = Item.getItems("unique");
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
    let empty = document.createElement("p");
    empty.style.color = "white";
    empty.style.fontSize = "35px";
    empty.style.marginLeft = "270px";

    empty.innerText = "Empty";
    div.append(empty);
  }
}
