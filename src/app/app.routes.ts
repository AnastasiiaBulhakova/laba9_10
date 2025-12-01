import { Routes } from '@angular/router';
import { ArrayOneComponent } from './array-one/array-one';
import { ArrayTwoComponent } from './array-two/array-two';
import { AnimalComponent } from './animal/animal';

export const routes: Routes = [

    { path: 'lab8', component: AnimalComponent },

    { path: 'array-one', component: ArrayOneComponent },
    { path: 'array-two', component: ArrayTwoComponent },


    { path: '', redirectTo: '/lab8', pathMatch: 'full' }
];