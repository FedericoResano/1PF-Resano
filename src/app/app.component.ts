import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Administración del Alumnado';  
  usuario= localStorage.getItem('usuario');
  ngOnInit():void{
    
   }
}
