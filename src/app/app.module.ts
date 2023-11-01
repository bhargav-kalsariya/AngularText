import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { InBuildDirective } from './directive/in-build.directive';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CascadingComponent } from './cascading/cascading.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DirectiveComponent,
    InBuildDirective,
    PipeComponent,
    HomeComponent,
    MyFormComponent,
    ParentComponent,
    ChildComponent,
    ReactiveFormComponent,
    CascadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }