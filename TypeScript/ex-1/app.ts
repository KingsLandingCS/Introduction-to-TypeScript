// const person: { name: string; age: number; nickname?: string } = {

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "dave",
    age: 42,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favroiteActivities: string[];
favroiteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
