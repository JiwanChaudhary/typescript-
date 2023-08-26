// const User = {
//   name: "Jiwan",
//   email: "jiwan@g.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "Jiwan", isPaid: false, email: "j@j.com" });   this gives error but if we create an object and pass it to the createUser function, it will not give me an error which is shown below

// let newUser = { name: "Jiwan", isPaid: false, email: "j@j.com" };
// this is not giving me an error, this is the bad behaviour of typescript
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "react", price: 34 };
// }

// createCourse();

//! Type Aliases

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// this function accepts the user of type User and also returns the type User
// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

//! Readonly and Optional
type User = {
  //   here readonly means, once we assign value to it, it cannot be changed as it is readonly
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  //   here creditCardNumber is optional as we added ? before :, if there is value then we can pass to it else it will not make any problem
  creditCardNumber?: number;
};

let myUser: User = {
  _id: 123,
  name: "j",
  email: "j@j.com",
  isActive: true,
};

// here we can change the value of name and other properties but cannot change the value of _id as it is readonly

myUser.email = "j@gmail.com";

//? here _id cannot be changed, it will give error
// myUser._id = 1234;

//! use of & sign
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: string;
  };

export {};
