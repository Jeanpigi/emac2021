#  New features in ECMAScript 2021

ECMAScript 2021, the 12th edition, introduces the replaceAll method for Strings; logical assignment operators (??=, &&=, ||=); and separators for numeric literals (1_000).

## replaceAll

Assuming we have a constant named string

```
const message = "Javascript is the best web scripting language. Javascript can be used for both front end and backend";
```

And we want to replace the word Javascript with Typescript, we normally would use the replace method, What if we want to replace all instances of Javascript with Typescript, That is where the replaceAll method comes to shine.

```
console.log(message.replaceAll("Javascript", "Typescript"));
```

## Private Methods

To access the methods inside the classes we first need to instantiate the class. if we want to make showAge() a private method inside the class People so outside the scope of the class it is not accessible, we just add the # sign in front of the showAge method like this #showAge.

First we create new public method called showAll() inside the class People from this public method we can access the private method #showAge() and since our new method is a public one we would be able to print the age on the console. Take a look at the code below.

```
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

}

const people = new People();

people.showAll();
```

## Numeric Separators

This feature enables developers to make their numeric literals more readable by creating a visual separation between groups of digits. Large numeric literals are difficult for the human eye to parse quickly, especially when there are long digit repetitions.

```
let budget = 1_000_000

console.log(budget === 10 ** 12);
```

## Logical Assignment Operator

Logical assignment operator combines the logical operations(&&, || or ??) with assignment.

```
let x = 1;
let y = 2;
x &&= y;
console.log(x);
```

# Run 

If you just want to run, you can use a command which is:

```
node index.js
```

or

```
deno run index.js
```


# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


# Authors
* **Jean Pierre Giovanni Arenas Ortiz**

# License
[MIT](https://choosealicense.com/licenses/mit/)