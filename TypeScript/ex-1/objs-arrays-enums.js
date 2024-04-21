"use strict";
// const person: { name: string; age: number; nickname?: string } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "dave",
//     age: 42,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"]
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "dave",
    age: 42,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
let favroiteActivities;
favroiteActivities = ['Sports', 5];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
