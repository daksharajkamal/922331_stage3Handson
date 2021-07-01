//Object in javascript
var person = {
    firstName: "Shashwat",
    lastName: "Tiwari",
    age: 22,
    eyeColor: "blackish",
    //methods inside the object
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
};
//Print object
console.log(person)
// elements
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

console.log(firstName + " " + lastName + " of age " + age + " has an " + eyeColor + " eyes.");

//Another way of accessing elements of an object
console.log("Name: " + person["firstName"] + " " + person["lastName"]);

//Access the function inside the object
console.log("Full name is: " + person.fullname());
