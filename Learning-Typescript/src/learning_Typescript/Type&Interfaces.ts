type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(order)
// }
// if the type is not reapeted then put in the params line
function makeChai(order: ChaiOrder) {
    console.log(order)
}

function serveChai(order: ChaiOrder) {
    console.log(order)
}

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

// type CupSize = "small" | "large" // hard coded
// interface CupSize { "small" | "large"} // keys are important for interfaces
interface Cupsize {
    size: "small" | "large";
}

// class Chai implements CupSize{
//     // this won't give suggestions as well it does not work with hard coded types
// }

class Chai implements Cupsize {
    size: "small" | "large" = "large";
}

// type Response = { ok: true } | { ok: false }
// class mayRes implements Response {
//     ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon" // this is called Literal type

function orderChai(t: TeaType) {
    console.log(t)
}

type BaseChai = { teaLeave: number }
type Extra = { masala: number }

type MasalaChai2 = BaseChai & Extra

const cup: MasalaChai2 = {
    teaLeave: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string;
}

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "Materji",
    version: 1
}

// cfg.appName = "ChaiCode" // it is only readOnly