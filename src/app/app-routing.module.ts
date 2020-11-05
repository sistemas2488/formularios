import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../src/app/pages/home/home.component';
import { FormularioComponent } from '../../src/app/pages/formulario/formulario.component';
import { FormulariorComponent } from '../../src/app/pages/formularior/formularior.component';
import { Formularior2Component } from '../../src/app/pages/formularior2/formularior2.component';
import { Formularior3Component } from '../../src/app/pages/formularior3/formularior3.component';
import { Formularior4Component } from '../../src/app/pages/formularior4/formularior4.component';
import { Formularior5Component } from '../../src/app/pages/formularior5/formularior5.component';
import { Formularior6Component } from '../../src/app/pages/formularior6/formularior6.component';
import { Formularior7Component } from '../../src/app/pages/formularior7/formularior7.component';
import { Formularior8Component } from '../../src/app/pages/formularior8/formularior8.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'formulariop',component:FormularioComponent},
  {path:'formularior',component:FormulariorComponent},
  {path:'formularior2',component:Formularior2Component},
  {path:'formularior3',component:Formularior3Component},
  {path:'formularior4',component:Formularior4Component},
  {path:'formularior5',component:Formularior5Component},
  {path:'formularior6',component:Formularior6Component},
  {path:'formularior7',component:Formularior7Component},
  {path:'formularior8',component:Formularior8Component},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
