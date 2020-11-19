import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app-component/app.component";
import { AppTableComponent } from "./app-table-component/app-table.component";
import { ChildContainerDirective } from "./child-container.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AppTableComponent, ChildContainerDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
