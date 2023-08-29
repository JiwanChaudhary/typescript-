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
  private readonly city: string = "Saptari";
  constructor(public email: string, public name: string, private id: string) {}
}

const Jiwan = new User("j@j.com", "jiw", "jujs");
