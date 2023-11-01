import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CascadingComponent } from './cascading/cascading.component';

const routes: Routes = [
  {
    component: DirectiveComponent,
    path: 'directive',
  },
  {
    component: PipeComponent,
    path: 'pipe',
  },
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: MyFormComponent,
    path: 'form',
  },
  {
    component: ParentComponent,
    path: 'inputoutput',
  },
  {
    component: ReactiveFormComponent,
    path: 'reactiveForm',
  },
  {
    component: CascadingComponent,
    path: 'cascading',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
