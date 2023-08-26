"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Jiwan",
    email: "jiwan@g.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({ name: "Jiwan", isPaid: false, email: "j@j.com" });   this gives error but if we create an object and pass it to the createUser function, it will not give me an error which is shown below
var newUser = { name: "Jiwan", isPaid: false, email: "j@j.com" };
// this is not giving me an error, this is the bad behaviour of typescript
createUser(newUser);
function createCourse() {
    return { name: "react", price: 34 };
}
createCourse();
