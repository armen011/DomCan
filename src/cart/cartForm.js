function CartForm() {
    if (!document.querySelector(".cover")) {
        const main = document.querySelector("main");
        let cover = document.createElement("div");
        cover.classList.add("cover");
        createCart(cover);
        main.append(cover);
    } else {
        let cover = document.querySelector(".cover");
        cover.innerText = "";
        createCart(cover);
    }
}

createCart = (div) => {
    console.log(Item.showCart())
    let cartForm = document.createElement("div");
    cartForm.classList.add("cartForm");

    //<==========Header2================>
    let h2 = document.createElement("h2");
    h2.innerText = "Cart";

    //<==========CartMain================>
    let main = document.createElement("div");
    main.classList.add("CartMain");


    //<==========CloseBtn================>
    let closeBtn = document.createElement("div");
    closeBtn.classList.add("close");
    closeBtn.onclick = () => location.reload();

    //<==========Appending================>

    cartForm.append(h2, closeBtn);
    div.append(cartForm);
};
