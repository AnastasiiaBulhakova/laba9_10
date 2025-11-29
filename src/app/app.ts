import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { AnimalComponent } from './animal/animal';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AnimalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('laba9_10');
}
