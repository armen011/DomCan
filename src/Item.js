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
  static addToCart(id) {
    let Items = JSON.parse(localStorage.Items);
    Items.forEach(element => {
      if (element.id == id) {
        if (element.inChart === true) {
          element.count += 1
        } else {
          element.inChart = true
          element.count = 1
        }
      }
      localStorage.Items = JSON.stringify(Items);

    });

  }
  static showCart() {
    if (localStorage.Items) {
      let Items = JSON.parse(localStorage.Items);
      const res = Items.filter((elm) => { return elm.inChart })
      return res
    } else {
      return []
    }
  }
  static changeCount(id, count, max) {
    let Items = JSON.parse(localStorage.Items);

    Items.forEach(element => {
      if (element.id == id) {
        if (count === 0) {
          element.inChart = false
        } else if (count < max) {
          element.count = parseInt(count)
        } else {
          element.count = parseInt(max)

        }

      }
      localStorage.Items = JSON.stringify(Items);

    })
  }
  static search(char) {
    let res = []
    if (char === '') {
      return res
    }
    if (localStorage.Items) {
      const items = JSON.parse(localStorage.Items);

      const result = items.filter((elm) => elm.title.toLowerCase().indexOf(char.toLowerCase()) > -1)
      const firstLetter = result.filter((elm) => elm.title[0].toLowerCase() == char[0].toLowerCase())
      const others = result.filter((elm) => elm.title[0].toLowerCase() != char[0].toLowerCase())
      res = [...firstLetter.sort(dynamicSort('title')), ...others.sort(dynamicSort('title'))]
    }
    function dynamicSort(property) {
      let sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a, b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }
    return res
  }

}
