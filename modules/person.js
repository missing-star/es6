const a = 12,b=5;
let c = 10;
let show = () => {
    console.log('show...');
    console.log(a,b);
}

setTimeout(() => {
    c = 20;
},1000);

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    getUser(){
        console.log(`my name is ${this.name},my age is ${this.age}`);
    }
}

export {
    a,
    b,
    c,
    show
}

export default {
    Person
}