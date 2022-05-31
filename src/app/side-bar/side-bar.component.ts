import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  usuario=localStorage.getItem('usuario');
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChange():void{
    this.usuario=localStorage.getItem('usuario');
  }

}
