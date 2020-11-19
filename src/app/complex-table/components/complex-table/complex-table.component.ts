import {Component, ContentChildren, QueryList} from '@angular/core';
import {ComplexTableRowComponent} from '../complex-table-row/complex-table-row.component';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.css']
})
export class ComplexTableComponent {
  @ContentChildren(ComplexTableRowComponent)
  public rows: QueryList<ComplexTableRowComponent>;
}
