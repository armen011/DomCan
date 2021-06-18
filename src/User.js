class User {
  constructor(name, surname, email, phone) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
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
          id: 1,
        },
      ];
      localStorage.users = JSON.stringify(users);
    }
  }
}

