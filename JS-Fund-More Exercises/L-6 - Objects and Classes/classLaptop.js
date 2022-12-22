class Laptop {
    constructor(info , quality){
        this.infoProduct = info;
        this.age = info.age;
        this.quality = quality;
        this.isOn = false;
        
    }

    showInfo(){
        return JSON.stringify(this.infoProduct)
    } 

    turnOn(){
        this.quality--;
        this.isOn = true;
    }

    turnOff(){
        this.quality--;
        this.isOn = false;
    }

    get price(){
        return (800 - (this.age * 2) + (this.quality * 0.5));
    }
}

// let info = {producer: "Lenovo", age: 1, brand: "Legion"}
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// laptop.turnOn()
// laptop.turnOff()
// console.log(laptop.isOn)


let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)