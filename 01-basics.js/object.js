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