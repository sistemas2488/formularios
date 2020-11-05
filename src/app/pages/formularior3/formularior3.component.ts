import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { Validacionespropias } from '../../class/validacionespropias';

@Component({
  selector: 'app-formularior3',
  templateUrl: './formularior3.component.html',
  styleUrls: ['./formularior3.component.css']
})
export class Formularior3Component implements OnInit {

  myform:FormGroup  //////
 
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      numero1: ['', [Validators.required, Validacionespropias.multiplo2]],
      numero2: ['', [Validators.required, Validacionespropias.menor10]],
      numero3: ['', [Validators.required, Validacionespropias.mayor0_y_menor1000]] ,
      numero4: ['', [Validators.required, Validacionespropias.numeropositivo]] 
     
    })
  }
  submit() {
    
   
  }

  ngOnInit(): void {
  }

 
}