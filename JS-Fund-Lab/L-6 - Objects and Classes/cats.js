function cats(array){

    class Cats {
        constructor(name , age) {
            this.name = name;
            this.age = age;
        }
        catMeow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const element of array) {
        let [name , age] = element.split(` `)

        let cats = new Cats(name , age);
        cats.catMeow()
        
    }
}

cats(['Mellow 2', 'Tom 5'])