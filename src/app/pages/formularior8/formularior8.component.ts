import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-formularior8',
  templateUrl: './formularior8.component.html',
  styleUrls: ['./formularior8.component.css']
})
export class Formularior8Component implements OnInit {

 
  myform:FormGroup  //////formulario
  persona:Array<Persona>=new Array<Persona>();///lista de personas a ingresar
  nuevo:boolean=true/// estado para saber si el boton de agregar se habilita o no y lo contrario con editar
  posicioneditar:number // variable para manipular la posicion del array a editar
   constructor(private _builder:FormBuilder) { 
     this.myform=this._builder.group({
       nombre: ['', [Validators.required ]],
       correo: ['', [Validators.required, Validators.email]],
       edad:   ['', [Validators.required]]
      
      })
   }





agregar(){
  
  /// mmetodo para agregar una persona al arreglo
  this.persona.push(this.myform.value)
  this.myform.reset()
}








editar(){
  //ubico en la lista los nuevos datos en la posicion indicada
  this.persona[this.posicioneditar].nombre=this.myform.value.nombre
  this.persona[this.posicioneditar].correo=this.myform.value.correo
  this.persona[this.posicioneditar].edad=this.myform.value.edad
  this.myform.reset()
  this.nuevo=true

}






editarusuario(posicion:number){
/// mmetodo para obetener la posicion de la persona ingresar y subir los datos al formulario para su edicion
  this.myform.setValue({
    nombre:this.persona[posicion].nombre,
    correo:this.persona[posicion].correo,
    edad:this.persona[posicion].edad
  })
  this.posicioneditar=posicion
  this.nuevo=false

}







eliminarusuario(posicion:number){
this.persona.splice(posicion,1)// posicion, cantidad de elementos
}
  
  ngOnInit(): void {
  }

}
