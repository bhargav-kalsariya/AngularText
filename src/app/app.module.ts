import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { InBuildDirective } from './directive/in-build.directive';

@NgModule({
  declarations: [AppComponent, FilterPipe, DirectiveComponent, InBuildDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
