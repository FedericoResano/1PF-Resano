import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumnos';
import { AlumnosService } from '../alumnos.service';


@Component({
  selector: 'app-grilla-estudiantes',
  templateUrl: './grilla-estudiantes.component.html',
  styleUrls: ['./grilla-estudiantes.component.scss']
})
export class GrillaEstudiantesComponent implements OnInit {

  usuario=localStorage.getItem('usuario');
  alumnos:Alumnos[];
  pageTitle:string="Listado de Alumnos";
  
  displayedColumns: string[] = ['alumnoNombre', 'alumnoCurso', 'alumnoMail', 'accion'];
  constructor(private serviceAlumnos:AlumnosService) {
    
   }

  ngOnInit(): void {
    this.serviceAlumnos.getAll().subscribe((data)=>{
    this.alumnos = data;
    }
    )
    
  }
  

}
