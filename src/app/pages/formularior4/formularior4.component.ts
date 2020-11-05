import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularior4',
  templateUrl: './formularior4.component.html',
  styleUrls: ['./formularior4.component.css']
})
export class Formularior4Component implements OnInit {
 seleccionada: string
 myform:FormGroup  //////
 resultado:number
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      numero1: ['', [Validators.required ]],
      numero2: ['', [Validators.required ]],
      operacion:[]
     })
  }
  submit(values) {
    this.seleccionada= values.operacion;
    switch (this.seleccionada) {
      case 'Suma' :  this.resultado=values.numero1+values.numero2
      alert(this.resultado)
      break;
      case 'Resta' :  this.resultado=values.numero1-values.numero2
      alert(this.resultado)
      break;
      case 'Multiplicacion' :  this.resultado=values.numero1*values.numero2
      alert(this.resultado)
      break;
      case 'Division' :  this.resultado=values.numero1/values.numero2
      alert(this.resultado)
      break;    }
    console.log(values)
    
     
    
    
    
   
  }

  ngOnInit(): void {
  }

 
}