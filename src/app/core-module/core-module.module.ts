import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ]
})
export class CoreModuleModule {
}
