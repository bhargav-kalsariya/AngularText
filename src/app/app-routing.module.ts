import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes = [{
  component: DirectiveComponent,
  path: 'directive'
},
{
  component: PipeComponent,
  path: 'pipe'
}, {
  component: HomeComponent,
  path: ''
}, {
  component: MyFormComponent,
  path: 'form'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
