import { Component } from '@angular/core';
import { Animal } from '../Class/animal';
import { Cat } from '../Class/cat';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './animal.html',
  styleUrl: './animal.css',
})
export class AnimalComponent {
  name = '';
  h: number | null = null;
  k: number | null = null;

  catName = '';
  catHeight: number | null = null;
  breed = '';

  res1 = '';
  res2 = '';
  res3 = '';

  calc() {
    const an = new Animal(this.name, this.h ?? 0, this.k ?? 0);
    const cat = new Cat(this.catName, this.catHeight ?? 0, this.breed);

    this.res1 = `Тварина: ${an.name}, вага (кг): ${an.weightKg().toFixed(3)}`;
    this.res2 = `Кішка: ${cat.name}, вага (г): ${cat.weightGr().toFixed(1)}`;
    this.res3 = `Порода кішки: ${cat.breed}`;
  }
}
