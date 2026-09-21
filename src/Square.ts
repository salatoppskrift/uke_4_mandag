class Square {
    private side = 0;

    constructor(side: number) {
        this.side = side;
    }

    set Side(value: number) {
        // if(isAdmin) DA kan endre
        // logge hilken bruker, alle skal kunne logge, hvem logger npr?
        this.side = value;
    }

    get Side(): number {
        // if(isAdmin) DA kan motta
        // logge hvilken bruker og når
        return this.side;
    }
}

let s1 = new Square(5);
console.log(s1.Side);
s1.Side = 9;