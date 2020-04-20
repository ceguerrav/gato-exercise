import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlackboardCatComponent } from './blackboard-cat/blackboard-cat.component';
import { BlackboardCatDirective } from './directives/blackboard-cat.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlackboardCatComponent,
    BlackboardCatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
