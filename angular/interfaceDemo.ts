//Create the interface called IPerson
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: (a, b) => string
};

var person:IPerson = {
    firstName: "Shashwat",
    lastName: "Tiwari",
    sayHi: (firstName, lastName):string => {return ("Hi " + firstName + " " + lastName)}
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.sayHi("Shash", "Wat"));
