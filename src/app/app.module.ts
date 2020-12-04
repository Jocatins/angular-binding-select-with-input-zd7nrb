import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule }     from './app-routing.module';


import { SelectInputComponent } from './select-input/select-input.component';
import { SelectWInputComponent } from './select-input/select-w-input/select-w-input.component'

@NgModule({
  declarations: [
    AppComponent,
    SelectInputComponent,
    SelectWInputComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
