import { randomInt } from './randomInt.js';

export class ArrayTwo {
    a: number[][] = [];
    rows: number = 10; //  10 рядків
    cols: number = 7;  //  7 стовпців
    sumOddIndices: number = 0;

    constructor() { }


    genArray() {
        this.a = [];
        let rnd = new randomInt();

        for (let i = 0; i < this.rows; i++) {
            this.a[i] = [];
            for (let j = 0; j < this.cols; j++) {

                this.a[i][j] = rnd.randomInteger(-10, 50);
            }
        }
    }

    // Обчислення суми елементів з обома непарними індексами
    calculateSum() {
        this.sumOddIndices = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // Перевірка: чи обидва індекси непарні
                if (i % 2 !== 0 && j % 2 !== 0) {
                    this.sumOddIndices += this.a[i][j];
                }
            }
        }
    }
}