import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  component: DirectiveComponent,
  path: 'directive'
},
{
  component: PipeComponent,
  path: 'pipe'
}, {
  component: AppComponent,
  path: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
