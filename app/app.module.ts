import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgDatepickerModule } from 'ng2-datepicker';
@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularMultiSelectModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
