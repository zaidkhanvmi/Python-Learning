let response: any = "42";

let numericLenght: number = (response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement


let value: any

value = "string"
value = [1, 2, 3]
value = 2.5
value.toUpperCase();

let newValue: unknown; // it is also sort of any:

newValue = "string"
newValue = [1, 2, 3]
newValue = 2.5

if (typeof newValue === "string")
    newValue.toUpperCase();

try {

} catch (error) {
    if (error instanceof Error)
        console.log(error.message);

    console.log("Error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string // as a Type i forcefully insertion

type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin Dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user Dashboard")
        return;
    }
    role; // type never
}