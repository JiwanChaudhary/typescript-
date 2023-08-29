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
  private _courseCount = 1;
  private readonly city: string = "Saptari";
  constructor(public email: string, public name: string, private id: string) {}

  //?   private method vanne ni huncha, e.g. below cha, cannot be accessed outside class
  private deleteToken() {}

  // getter starts with get Keyword
  get getAppleId(): string {
    return `apple email: ${this.email}`;
  }

  get CourseCount(): number {
    return this._courseCount;
  }

  //   setter starts with set keyword and no return type and accepts a parameter
  set CourseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

const Jiwan = new User("j@j.com", "jiw", "jujs");

// Jiwan.deleteToken; , error dincha yesle
