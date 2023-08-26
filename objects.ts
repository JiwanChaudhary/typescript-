const User = {
  name: "Jiwan",
  email: "jiwan@g.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "Jiwan", isPaid: false, email: "j@j.com" });   this gives error but if we create an object and pass it to the createUser function, it will not give me an error which is shown below

let newUser = { name: "Jiwan", isPaid: false, email: "j@j.com" };
// this is not giving me an error, this is the bad behaviour of typescript
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 34 };
}

createCourse();

export {};
