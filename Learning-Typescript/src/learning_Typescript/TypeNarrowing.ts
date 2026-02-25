function getChai(kind: string | number): string {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string) {
    if (msg)
        return `Serving ${msg}`;

    return `Serving default masala chai ${msg}`
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small")
        return `small cutting chai...`

    if (size === "medium" || size === "large")
        return `make extra chai...`

    return `chai order #${size}`
}

class KulhadChai {
    serve() {
        return `Serving kulhad Chai`
    }
}

class Cutting {
    serve() {
        return `Serving cutting Chai`
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string;
    sugar: string;
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = { type: "masala"; spiceLevel: number }
type GingerChai = { type: "ginger"; amount: number }
type ElaichiChai = { type: "elaichi"; aroma: number }

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala chai`;
        case "elaichi":
            return `Ealichi Chai`;
        case "ginger":
            return "GInger chai"
            break;

        default:
            return "Your order has been confirmed"
    }
}