// primeiro código TS

type heroi = {
    name: string,
    vulgo: string;
};

function printObject(pessoa: heroi) {
    console.log(pessoa);
}

printObject({
    name: "bruce wayne",
    vulgo: "batman",
});

let dado: string = "cami";
console.log(dado);