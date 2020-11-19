import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy
} from '@angular/core';
import { ChildContainerDirective } from '../directives/child-container.directive';

@Component({
  selector: 'app-simple-table',
  templateUrl: './app-simple-table.component.html',
  styleUrls: ['./app-simple-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSimpleTableComponent {
  @Input()
  rows: any[];

  @Input()
  cols: string[] = [];

  /** Get child containers */
  @ContentChildren(ChildContainerDirective)
  public childContainers: QueryList<ChildContainerDirective>;

  public getChildContainerByName(
    name: string
  ): ChildContainerDirective | undefined {
    return this.childContainers.find(child => child.containerName === name);
  }
}
