import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../src/app/pages/home/home.component';
import { FormularioComponent } from '../../src/app/pages/formulario/formulario.component';
import { FormulariorComponent } from '../../src/app/pages/formularior/formularior.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'formulariop',component:FormularioComponent},
  {path:'formularior',component:FormulariorComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
