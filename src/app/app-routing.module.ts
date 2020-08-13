import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterHomeComponent } from './starter-home/starter-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/patient', pathMatch: 'full' },
  {path: 'patient' , component: StarterHomeComponent},
  {path: '**', redirectTo: '/patient', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
