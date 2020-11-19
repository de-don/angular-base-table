import {NgModule} from '@angular/core';

import {AppRootComponent} from './app-root-component/app-root.component';
import {AppSimpleTableComponent} from './app-simple-table-component/app-simple-table.component';
import {ChildContainerDirective} from './directives/child-container.directive';
import {CoreModuleModule} from './core-module/core-module.module';
import {ComplexTableModule} from './complex-table/complex-table.module';

@NgModule({
  imports: [CoreModuleModule, ComplexTableModule],
  declarations: [AppRootComponent, AppSimpleTableComponent, ChildContainerDirective],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
