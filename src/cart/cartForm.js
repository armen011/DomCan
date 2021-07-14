function CartForm() {
    if (!document.querySelector(".cover")) {
        const main = document.querySelector("main");
        let cover = document.createElement("div");
        cover.classList.add("cover");
        cover.onclick = run
        createCart(cover);
        main.append(cover);
    } else {
        let cover = document.querySelector(".cover");
        cover.innerText = "";
        createCart(cover);
    }
}

createCart = (div) => {

    const inCart = Item.showCart()
    let cartForm = document.createElement("div");
    cartForm.classList.add("cartForm");
    cartForm.onclick = (e) => { e.stopPropagation() }

    //<==========Header2================>
    let h2 = document.createElement("h2");
    h2.innerText = "Cart";

    //<==========CartMain================>
    let main = document.createElement("div");
    main.classList.add("cartMain");
    if (inCart.length) {
        showInCart(main, inCart)
    } else {
        let h3 = document.createElement('h3')
        h3.innerText = 'Empty'
        main.append(h3)
    }


    //<==========CloseBtn================>
    let closeBtn = document.createElement("div");
    closeBtn.classList.add("close");
    closeBtn.onclick = () => run();

    //<==========Appending================>

    cartForm.append(h2, main, closeBtn);
    div.append(cartForm);
};



//<==========================Cart=========================>
function showInCart(div, inCart) {
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')
    const trHead = document.createElement('tr')
    const title = document.createElement('th')
    title.innerText = 'Title'
    let price = document.createElement('th')
    price.innerText = 'Price'
    let qnt = document.createElement('th')
    qnt.innerText = 'Qnt'
    let total = document.createElement('th')
    total.innerText = 'Total'
    trHead.append(title, price, qnt, total)
    thead.append(trHead)


    inCart.forEach(element => {
        tr = document.createElement('tr')
        tdTitle = document.createElement('td')
        tdTitle.innerText = element.title
        tdPrice = document.createElement('td')
        tdPrice.innerText = element.price + ' $'
        tdQnt = document.createElement('td')
        let input = document.createElement('input')
        input.type = 'number'
        input.value = element.count
        input.max = element.qnt
        input.addEventListener('keyup', e => setCount(element.id, e.target.value, element.qnt))
        tdQnt.append(input)

        tdTotal = document.createElement('td')
        tdTotal.innerText = element.count * element.price + '$'
        tr.append(tdTitle, tdPrice, tdQnt, tdTotal)
        tbody.append(tr)
    });
    table.append(thead, tbody)
    div.innerHTML = ''
    div.append(table)

}
function setCount(id, count, max) {
    Item.changeCount(id, count, max)
    CartForm()
}

