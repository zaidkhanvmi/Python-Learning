export interface Chai {
    id: Number;
    name: String;
    price: Number
}

// Type inference is the concept which typescript gives Type to values by default

let drink = "water"; // now this is by default given type String
let users = Math.random() > 0.5 ? 5 : 10; // now it's data type is number for default 
let testingNum = Math.random() > 0.5 ? 5 : "20"; // string | number
