import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringSearchComponent } from './string-search/string-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SorterAlgosComponent } from './sorter-algos/sorter-algos.component';

@NgModule({
  declarations: [
    AppComponent,
    StringSearchComponent,
    SorterAlgosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
