import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {ComplexTableRowComponent} from '../complex-table-row/complex-table-row.component';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.css']
})
export class ComplexTableComponent {
  @Input()
  public showRowNumbers = false;

  @ContentChildren(ComplexTableRowComponent)
  public rows: QueryList<ComplexTableRowComponent>;
}
