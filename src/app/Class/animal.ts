export class Animal {
    name: string;
    h: number;
    k: number;

    constructor(name: string, h: number, k: number) {
        this.name = name?.trim() ? name : "NoName";
        this.h = h > 0 ? h : 0.5;
        this.k = k > 0 ? k : 10;
    }

    weightKg(): number {
        return this.k * Math.pow(this.h, 3);
    }
}
