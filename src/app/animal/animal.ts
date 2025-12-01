import { Component } from '@angular/core';
import { Animal } from '../Class/animal';
import { Cat } from '../Class/cat';
import { Dog } from '../Class/dog';
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
  dogName = '';
  dogHeight: number | null = null;
  dogbreed = '';

  res1 = '';
  res2 = '';
  res3 = '';
  res4 = '';
  res5 = '';

  calc() {
    //  тварини
    if (!this.name.trim()) {
      this.res1 = "Помилка: введіть кличку тварини!";
      return;
    }

    if (this.h === null || this.h <= 0) {
      this.res1 = "Помилка: ріст тварини має бути > 0!";
      return;
    }

    if (this.k === null || this.k <= 0) {
      this.res1 = "Помилка: коефіцієнт k має бути > 0!";
      return;
    }

    //  кішки
    if (!this.catName.trim()) {
      this.res2 = "Помилка: введіть кличку кішки!";
      return;
    }

    if (this.catHeight === null || this.catHeight <= 0) {
      this.res2 = "Помилка: ріст кішки має бути > 0!";
      return;
    }

    if (!this.breed.trim()) {
      this.res3 = "Помилка: введіть породу кішки!";
      return;
    }


    if (!this.dogName.trim()) {
      this.res2 = "Помилка: введіть кличку собака!";
      return;
    }

    if (this.dogHeight === null || this.catHeight <= 0) {
      this.res2 = "Помилка: ріст собаки має бути > 0!";
      return;
    }

    if (!this.dogbreed.trim()) {
      this.res3 = "Помилка: введіть породу собаки!";
      return;
    }

    const an = new Animal(this.name, this.h, this.k);
    const cat = new Cat(this.catName, this.catHeight, this.breed);
    const dog = new Dog(this.dogName, this.dogHeight, this.dogbreed);

    this.res1 = `Тварина: ${an.name}, вага (кг): ${an.weightKg().toFixed(3)}`;
    this.res2 = `Кішка: ${cat.name}, вага (г): ${cat.weightGr().toFixed(1)}`;
    this.res3 = `Порода кішки: ${cat.breed}`;
    this.res4 = `Собака: ${cat.name}, вага (г): ${cat.weightGr().toFixed(1)}`;
    this.res5 = `Порода собака: ${cat.breed}`;
  }

}
