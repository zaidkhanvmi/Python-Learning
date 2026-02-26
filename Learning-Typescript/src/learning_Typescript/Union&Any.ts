// any is most of the used when we dont know the data Type

let sub: number | string = "1M"; // This is Called union

// Now this Union has many usage

let apiRequestStatus: 'pending' | 'success' | 'error' = "pending";

apiRequestStatus = "error" // now this will only accept the defined values This is Union usage

let airlineSeat: 'aisle' | 'window' | 'middle' = "middle";

airlineSeat = "aisle";

const orders = ['12', '20', '30', '42 '];

let currentOrder: string | undefined; // now this is any

for (let order of orders) {
    if (order === '30') {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder); // and this is String | undefined