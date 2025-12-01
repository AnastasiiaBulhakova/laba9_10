import { Animal } from './animal';
export class Dog extends Animal {
    breed: string;

    constructor(name: string, h: number, breed: string) {
        super(name, h, 20);
        this.breed = breed?.trim() ? breed : "NoName";
    }

    weightGr(): number {
        return this.weightKg() * 1000;
    }
}