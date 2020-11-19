import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html'
})
export class AppRootComponent {
  public fruits = [
    {name: 'first', food: ['apple', 'orange']},
    {name: 'second', food: []},
    {name: 'third', food: ['apple']},
    {name: 'fourth', food: ['banana']}
  ];

  public mainCourse = [
    {name: 'fifth', food: ['beef']},
    {name: 'sixth', food: ['chicken']},
    {name: 'seventh', food: []},
    {name: 'eighth', food: ['cow', 'fish']}
  ];

  public cols = ['name', 'food'];

  public showRowNumbers = false;

  toggleNumbers(): void {
    this.showRowNumbers = !this.showRowNumbers;
  }

}
