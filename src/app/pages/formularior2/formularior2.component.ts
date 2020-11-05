import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularior2',
  templateUrl: './formularior2.component.html',
  styleUrls: ['./formularior2.component.css']
})
export class Formularior2Component implements OnInit {
  myform:FormGroup  //////
  resultado: string;
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      nombre: ['', [Validators.required, Validators.minLength(10)]]  ,
      mail: ['', [Validators.required, Validators.email]]  ,
      mensaje: ['', [Validators.required, Validators.maxLength(500)]] 
    })
  }
  submit() {
    
    if (this.myform.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }



  ngOnInit(): void {
  }

 
}