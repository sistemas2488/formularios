import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 //lista=null
 lista: any = {};
  constructor(private http: HttpClient) {
    this.http.get('http://scratchya.com.ar/vue/datos.php') //'assets/json/usuario.json'
    .subscribe(
      result => {
        console.log(result)
        this.lista=result
                },
        error => {
        console.log('problemasssss');
       
      }
    );
   }

  ngOnInit(): void {
    
  }

}
