// singleton
// Object.create

// object literals
const User = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

// const greet = User.greet();
console.log(User);
User.name = "Dev";  // User["name"] another way to write same thing
console.log(User);

Object.freeze(User);
User.name = "John Doe";
console.log(User);


// const tinderUser = new Object();  // Singleton Object
const tinderUser = {}; // non singleton object

tinderUser.name = "Sam";
tinderUser.id = "123";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
