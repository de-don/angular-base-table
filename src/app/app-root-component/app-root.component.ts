import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html'
})
export class AppRootComponent {
  rows = [
    { id: 1, name: 'first', food: ['apple', 'orange'] },
    { id: 2, name: 'second', food: [] },
    { id: 3, name: 'third', food: ['apple'] },
    { id: 4, name: 'fourth', food: ['banana'] }
  ];

  cols = ['id', 'name', 'food'];
}
