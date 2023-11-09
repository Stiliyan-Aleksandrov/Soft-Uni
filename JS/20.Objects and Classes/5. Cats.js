function solve(catAsStrings) {
    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name=name;
            this.age=age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }
    let cats = [];
    for (let catAsString of catAsStrings) {
        let tokens = catAsString.split(` `);
        let name = (tokens[0]);
        let age = Number(tokens[1]);
        let cat = new Cat(name, age);
        cats.push(cat);
    }
    for (let cat of cats) {
        cat.meow()
    }
}