import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-complex-table-cell',
  templateUrl: './complex-table-cell.component.html',
  styleUrls: ['./complex-table-cell.component.css']
})
export class ComplexTableCellComponent {
  @ViewChild(TemplateRef)
  public templateRef: TemplateRef<any>;
}
