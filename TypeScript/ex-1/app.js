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
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
    name: "dave",
    age: 42,
    hobbies: ["Sports", "Cooking"],
    role: ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favroiteActivities;
favroiteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
if (person.role === ADMIN) {
    console.log("is admin");
}
