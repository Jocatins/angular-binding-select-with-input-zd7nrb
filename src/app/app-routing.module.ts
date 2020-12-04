import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectInputComponent } from './select-input/select-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/select-inputy', pathMatch: 'full' },
  { path: 'select-inputy', component: SelectInputComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

 