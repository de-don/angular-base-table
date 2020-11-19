import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy
} from "@angular/core";
import { ChildContainerDirective } from "../child-container.directive";

@Component({
  selector: "app-table",
  templateUrl: "./app-table.component.html",
  styleUrls: ["./app-table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTableComponent {
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
