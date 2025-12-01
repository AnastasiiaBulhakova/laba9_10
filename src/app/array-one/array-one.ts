import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArrayOne } from '../Class/arrayOne';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './array-one.html',
  styleUrl: './array-one.css'
})
export class ArrayOneComponent {
  arrayOne: ArrayOne = new ArrayOne();
  inputLetter: string = '';

  search() {
    this.arrayOne.filterByLetter(this.inputLetter);
  }
}