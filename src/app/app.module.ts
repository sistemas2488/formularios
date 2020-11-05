import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormulariorComponent } from './pages/formularior/formularior.component';
import { Formularior2Component } from './pages/formularior2/formularior2.component';
import { Formularior3Component } from './pages/formularior3/formularior3.component';
import { Formularior4Component } from './pages/formularior4/formularior4.component';
import { Formularior5Component } from './pages/formularior5/formularior5.component';
import { Formularior6Component } from './pages/formularior6/formularior6.component';
import { Formularior7Component } from './pages/formularior7/formularior7.component';
import { Formularior8Component } from './pages/formularior8/formularior8.component';






@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderComponent,
    UserComponent,
    NavComponent,
    HomeComponent,
    FormulariorComponent,
    Formularior2Component,
    Formularior3Component,
    Formularior4Component,
    Formularior5Component,
    Formularior6Component,
    Formularior7Component,
    Formularior8Component
   

  
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
    
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
