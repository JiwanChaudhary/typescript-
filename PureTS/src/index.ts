class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const Jiwan = new User("j@j.com", "jiw");
Jiwan.city = "Kathmandu";
