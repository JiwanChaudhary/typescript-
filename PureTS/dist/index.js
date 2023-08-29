"use strict";
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Saptari"; // this is only accessible at this User class only, outside this is not accessible
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
//? Better way to write above code
class User {
    constructor(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
        this.city = "Saptari";
    }
}
const Jiwan = new User("j@j.com", "jiw", "jujs");
