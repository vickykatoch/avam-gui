import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringSearchComponent } from './string-search/string-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SorterAlgosComponent } from './sorter-algos/sorter-algos.component';
import { AvamTicketComponent } from './avam-ticket/avam-ticket.component';
import { SovLegComponent } from "app/avam-ticket/leg/sov-leg.component";
import { ObjectValuesPipe } from "app/avam-ticket/object-values.pipe";
import {AgGridModule} from "ag-grid-angular/main";
import { ApplicationLoggingService } from "app/logger-core";
import { Log4JsLoggerService } from "app/log4js-logger-adapter";


@NgModule({
  declarations: [
    AppComponent,
    StringSearchComponent,
    SorterAlgosComponent,
    AvamTicketComponent,
    SovLegComponent,
    ObjectValuesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    { provide: ApplicationLoggingService, useClass: Log4JsLoggerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
