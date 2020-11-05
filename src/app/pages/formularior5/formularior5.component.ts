import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularior5',
  templateUrl: './formularior5.component.html',
  styleUrls: ['./formularior5.component.css']
})
export class Formularior5Component implements OnInit {

seleccionada: string
 myform:FormGroup  //////
 resultado:number
 comentario:string
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      numero: ['', [Validators.required ]],
      opcion: ['', [Validators.required ]],
      casilla: ['', [Validators.required ]],
      operacion:[]
     })
  }
  submit(value) {
    
    if (value.opcion == "doble"){
      this.resultado=parseInt(value.numero)*2
      
      alert(this.resultado)
    }else if (value.opcion == "triple"){
      this.resultado=parseInt(value.numero)*3
      alert(this.resultado)
    }else if (value.opcion == "cuadrado"){
      this.resultado=parseInt(value.numero)*parseInt(value.numero)
      alert(this.resultado)
    }else if (value.opcion == "cubo"){
      this.resultado=parseInt(value.numero)*parseInt(value.numero)*parseInt(value.numero)
      alert(this.resultado)
    }
    if (value.casilla){
       this.comentario= "Casilla de verificacion SELECCIONADA"
    }else{
      this.comentario= "Casilla de verificacion NO SELECCIONADA"
    }
    
       
    
    
   
  }

  ngOnInit(): void {
  }
}