import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import {HttpClientModule} from '@angular/common/http';
import {DetailsModule} from './details/details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    DetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
