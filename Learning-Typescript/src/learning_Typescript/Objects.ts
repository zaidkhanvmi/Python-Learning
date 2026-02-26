// const users = {
//     name: "ZaidKhan",
//     age: 18,
//     isHot: false
// }

// Declaring Object 

// let user: {
//     name: string;
//     age: number;
//     isHot: boolean;
// }

// user = {
//     name: "testing",
//     age: 18,
//     isHot: false,
// }

//  Aliase Objects

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
} // this is reusable

const adrakChai: Tea = {
    name: "Adrak",
    price: 100,
    ingredients: ["ginger", "Choaclate"],
}

// if it looks like a Duck if it walks like a Duck it might be a Duck

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" }

let bigCup = { size: "500ml", material: "steel" }
smallCup = bigCup



type Brew = { break: number }
const coffe = { break: 5, beans: "Arabica" }

const chaiBrew: Brew = coffe;

type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "khan",
    password: "123"
}

type Item = { name: string, quantity: number }
type Addresss = { street: string, pin: number }

type Order = {
    id: string;
    item: Item[];
    address: Addresss;
}

// ==== Partial  
// we can update any one in the object

type NewChai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<NewChai>) => {
    console.log("updating chai with", updates);
}

updateChai({ name: "we can pass one" });
// Partial makes it optional to every Data Type

type ChaiOrder = {
    name?: string;
    quantites?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log("Now this required makes every data type Required", order);
}

placeOrder({ name: "tes", quantites: 12 });

// we als have one more type like Partial, Required, Pick

type PickInts = {
    name: string;
    price: number;
    pick: boolean;
}

type choice = Pick<PickInts, "name">;
type OmmitType = Omit<PickInts, "">;

const testingPick: choice = { name: "i only can pick name" }