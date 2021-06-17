class Item {
  constructor(title, price, qnt, img) {
    this.title = title;
    this.price = price;
    this.qnt = qnt;
    this.img = img;
    this.addItem();
  }
  addItem() {
    if (localStorage.Items) {
      let Items = JSON.parse(localStorage.Items);
      Items.push({
        title: this.title,
        price: this.price,
        qnt: this.qnt,
        img: this.img,
        userId: JSON.parse(sessionStorage.id),
        id: Items.length + 1,
      });
      localStorage.Items = JSON.stringify(Items);
    } else {
      let Items = [
        {
          title: this.title,
          price: this.price,
          qnt: this.qnt,
          img: this.img,
          userId: JSON.parse(sessionStorage.id),
          id: 1,
          inChart: false,
          count: 1,
        },
      ];
      localStorage.Items = JSON.stringify(Items);
    }
  }
  static getItems(type = "all") {
    if (localStorage.Items) {
      if (type === "all") {
        let Items = JSON.parse(localStorage.Items);
        return Items;
      } else if (type == "unique") {
        let Items = JSON.parse(localStorage.Items);
        let id = JSON.parse(sessionStorage.id);
        let res = Items.filter((elm) => elm.userId == id);
        if (res.length === 0) {
          return false;
        } else {
          return res;
        }
      }
    } else {
      return false;
    }
  }
}
