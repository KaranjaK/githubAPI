import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component'
import { GithubapiService } from './services/githubapi.service'
import { FormsModule } from '@angular/forms';
import { DateslicePipe } from './dateslice.pipe';
import { DisplayDirective } from './directives/display.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DateslicePipe,
    DisplayDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
