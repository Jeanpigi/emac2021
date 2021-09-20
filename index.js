const message = "Javascript is the best web scripting language. Javascript can be used for both front end and backend";

console.log(message.replace("Javascript", "Typescript"));
console.log("_________________________________________________");
console.log(message.replaceAll("Javascript", "Typescript"));
console.log("_________________________________________________");

class People {
    showName() {
        console.log("This is my name");
    }

    #showAge() {
        console.log("This is my age");
    }

    showAll() {
        this.showName();
        this.#showAge();
    }

    get Name() {
        return "Jean Pierre"
    }

    get #Age() {
        return 29
    }

    get PublicAge() {
        return this.#Age
    }
}

// Instanciar la clase
const people = new People()

people.showAll();

console.log(people.Age);
console.log(people.PublicAge);

console.log("_________________________________________________");

// Numeric separators

let budget = 1_000_000

console.log(budget === 10 ** 12);

let nibbles = 0b1010_0001_1000_0101;
// Is bit 7 on? It sure is!
// 0b1010_0001_1000_0101
//          
// We can double check: 
console.log(!!(nibbles & (1 << 7)));

console.log("_________________________________________________");

// Logical Assignment Operator
let x = 1;
let y = 2;
x &&= y;
console.log(x);