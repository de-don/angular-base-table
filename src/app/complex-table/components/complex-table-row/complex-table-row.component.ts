import {Component, ContentChildren, QueryList} from '@angular/core';
import {ComplexTableCellComponent} from '../complex-table-cell/complex-table-cell.component';

@Component({
  selector: 'app-complex-table-row',
  templateUrl: './complex-table-row.component.html',
  styleUrls: ['./complex-table-row.component.css']
})
export class ComplexTableRowComponent {
  @ContentChildren(ComplexTableCellComponent)
  public cells: QueryList<ComplexTableCellComponent>;
}
