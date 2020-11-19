import {NgModule} from '@angular/core';
import {CoreModuleModule} from '../core-module/core-module.module';
import {ComplexTableComponent} from './components/complex-table/complex-table.component';
import {ComplexTableRowComponent} from './components/complex-table-row/complex-table-row.component';
import {ComplexTableCellComponent} from './components/complex-table-cell/complex-table-cell.component';


@NgModule({
  declarations: [
    ComplexTableComponent,
    ComplexTableRowComponent,
    ComplexTableCellComponent,
  ],
  exports: [
    ComplexTableComponent,
    ComplexTableRowComponent,
    ComplexTableCellComponent,
  ],
  imports: [
    CoreModuleModule
  ]
})
export class ComplexTableModule {
}
