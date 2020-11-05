import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularior7',
  templateUrl: './formularior7.component.html',
  styleUrls: ['./formularior7.component.css']
})
export class Formularior7Component implements OnInit {

  
  myform:FormGroup  //////
  saldo:number=150000
  nombreM:string="Bryan Fernandez"
  nombrem:string="Bryan Fernandez"
  fecha:Date= new Date('01/02/2020')
  mes:string[]=['Enero','Febrero','Marzo','Abril','Mayo','junio']
  descuento:number=0.25
 
   constructor(private _builder:FormBuilder) { 
     this.myform=this._builder.group({
     
      })
   }



  ngOnInit(): void {
  }

}
