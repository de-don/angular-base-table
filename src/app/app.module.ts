import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRootComponent} from './app-root-component/app-root.component';
import {AppSimpleTableComponent} from './app-simple-table-component/app-simple-table.component';
import {ChildContainerDirective} from './directives/child-container.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppRootComponent, AppSimpleTableComponent, ChildContainerDirective],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
