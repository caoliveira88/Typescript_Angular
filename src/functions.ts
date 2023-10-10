function addNumber(x: number, y: number): number { // number
    return x + y;
}
let soma: number = addNumber(5, 4);

function addToHello(name: string): string { // string
    return `Hello ${name}`; 
}

function CallToPhone(phone: number | string): number | string { // multi tipos
    return phone;
}

async function getDatabase(id: number): Promise<string> { // async
    return "cami";
}