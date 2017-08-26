import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibModule } from 'f-gui-core';
import { AppComponent } from './app.component';
import { StringSearchComponent } from './string-search/string-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StringSearchComponent
  ],
  imports: [
    BrowserModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
