import { Animal } from './animal';

export class Cat extends Animal {
    breed: string;

    constructor(name: string, h: number, breed: string) {
        super(name, h, 15);
        this.breed = breed?.trim() ? breed : "NoName";
    }

    weightGr(): number {
        return this.weightKg() * 1000;
    }
}
