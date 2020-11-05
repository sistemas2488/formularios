import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularior6',
  templateUrl: './formularior6.component.html',
  styleUrls: ['./formularior6.component.css']
})
export class Formularior6Component implements OnInit {

  resultado:string
  
  myform1:FormGroup  
  myform2:FormGroup 
  myform3:FormGroup 
  myform4:FormGroup 
  myform5:FormGroup 
  myform6:FormGroup 
  myform7:FormGroup 
  myform8:FormGroup 
  
  
   constructor(
    private _builder:FormBuilder,
    private _builder2:FormBuilder,
    private _builder3:FormBuilder,
    private _builder4:FormBuilder,
    private _builder5:FormBuilder,
    private _builder6:FormBuilder,
    private _builder7:FormBuilder,
    private _builder8:FormBuilder) {
     /////////////////////////////////////
     this.myform1=this._builder.group({
       numero1: ['0', [Validators.required ]]
       })
     ////////////////////////////////////
      this.myform2=this._builder2.group({
        numero2: ['0', [Validators.required ]]
        })
    ////////////////////////////////////
      this.myform3=this._builder3.group({
        texto: ['', [Validators.required ]]
        })
    ////////////////////////////////////
      this.myform4=this._builder4.group({
        texto2: ['', [Validators.required ]]
        })
         ////////////////////////////////////
      this.myform5=this._builder5.group({
        texto3: ['', [Validators.required ]]
        })
         ////////////////////////////////////
      this.myform6=this._builder6.group({
        texto4: ['', [Validators.required ]],
        resultado2: ['']
        })
         ////////////////////////////////////
      this.myform7=this._builder7.group({
        texto5: ['', [Validators.required ]],
       
        })
         ////////////////////////////////////
      this.myform8=this._builder8.group({
        texto6: ['', [Validators.required ]],
       
        })

   }


  ///////////////////////evento clic/////////////////////
    clic(value){
      alert("Presiono un clic. El numero es "+value.numero1)      
    }  
    ////////////////////////evento doble clic/////////////////////
    dobleclic(value){
      alert("Presiono dos veces clic. El numero es "+value.numero2)      
    }  

  //////////////////////////////////////////////////////
    ////////////////////////evento doble clic/////////////////////

    input(evento){
        
      console.log(evento.target.value)   
      this.resultado=evento.target.value
    }  

   //////////////////////////////////////////////////////
   ////////////////////////evento doble clic/////////////////////
    foco(evento){
        
      alert("paso por la caja de texto")
    }  

      //////////////////////////////////////////////////////




    ///////////////////////evento key up/////////////////////
    up(evento){
        
      alert("accion cuando se suelta")
      console.log(evento)
      if(evento.key=="Enter")   {
        alert("Presiono la tecla Enter")
      }
    }  
    //////////////////////////////////////////////////////







     ///////////////////////evento key down/////////////////////
     down(evento){
      alert("accion cuando se ingresa")
      console.log(evento)
      if(evento.key=="Enter")   {
        alert("Presiono la tecla Enter")
      }
     
    }  

    //////////////////////////////////////////////////////









     ///////////////////////evento salir del mouse/////////////////////
     mouseleave(evento){
      alert("El mouse salio de la imagen")
     
    }  
    //////////////////////////////////////////////////////









    
     ///////////////////////evento ingresar con el mouse/////////////////////
     mouseenter(evento){
      alert("El mouse ingreso a la imagen")
     
    }  
    //////////////////////////////////////////////////////

  ngOnInit(): void {
  }

}
