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



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderComponent,
    UserComponent,
    NavComponent,
    HomeComponent,
    FormulariorComponent,
   
    
  
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
