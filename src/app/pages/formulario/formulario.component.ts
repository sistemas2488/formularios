import { Component, OnInit } from '@angular/core';
import { Promedio } from '../../models/promedio';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombres = null;
  
 
  nuevopromedio:Promedio={nombre:"",corte1:0,corte2:0,corte3:0,definitiva:0}
  constructor() {   
  }

  ngOnInit(): void {  
    
  }
  


  guardar(){
    this.nuevopromedio.definitiva=(this.nuevopromedio.corte1*0.3+this.nuevopromedio.corte2*0.3+this.nuevopromedio.corte3*0.4)
    console.log("hola")
    alert("El estudiante "+this.nuevopromedio.nombre+" tiene una nota definitiva de "+this.nuevopromedio.definitiva)
  }
}
