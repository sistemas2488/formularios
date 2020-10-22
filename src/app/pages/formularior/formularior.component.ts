import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularior',
  templateUrl: './formularior.component.html',
  styleUrls: ['./formularior.component.css']
})
export class FormulariorComponent implements OnInit {

  myform:FormGroup  
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      nombre: ['Bryan',Validators.required]  ,
      corte1: ['',Validators.required]  ,
      corte2: ['',Validators.required] ,
      corte3: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  enviar(values){
    console.log(values)
  }
  

}
