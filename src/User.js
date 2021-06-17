class User {
  constructor(name, surname, email, phone, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.id = 1;
    this.addUser();
  }
  addUser() {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      users.push({
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        password: this.password,
        id: users.length + 1,
      });
      localStorage.users = JSON.stringify(users);
    } else {
      let users = [
        {
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone: this.phone,
          password: this.password,
          id: 1,
        },
      ];
      localStorage.users = JSON.stringify(users);
    }
  }
  static checkEmail(email) {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      let res = users.some((elm) => elm.email === email);
      return !res;
    } else {
      return true;
    }
  }
  static LogIn(email, password) {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      let Check = users.filter((elm) => elm.email === email)[0];
      if (Check.password === password) {
        sessionStorage.id = JSON.stringify(Check.id);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  static getUserInfo() {
    const users = JSON.parse(localStorage.users);
    const userId = JSON.parse(sessionStorage.id);
    const user = users.filter((elm) => elm.id === userId)[0];
    return user;
  }
}
