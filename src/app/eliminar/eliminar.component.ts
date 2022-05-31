import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumnos } from '../alumnos';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {
  title: string = "Eliminar alumno";

  //Recupero la info del usuario
  usuario= localStorage.getItem('usuario');
  
  //Genero la propiedad alumno para el get y alumnos para volver a cargar la lista
  alumno: Alumnos
  alumnos: Alumnos[];
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private alumnosServicio: AlumnosService,
    private formBuilder: FormBuilder) { };
  eliminarFormGroup: FormGroup = this.formBuilder.group({
    Nombre: ['', [Validators.required, Validators.maxLength(100)]],
    Apellido: ['', [Validators.required, Validators.maxLength(100)]],
    Mail: ['', [Validators.required, Validators.email]],
    Curso: ['', [Validators.required]],
  })

  ngOnInit(): void {
    //Llamo al get del servicio para que me cargue los datos en el formulario y aca cargo el id en una variable para luego pasarla en le post.
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.alumnosServicio.get(this.id).subscribe((data) => {
        this.alumno = data;
        this.eliminarFormGroup.patchValue(data);
      })
    })
  }
  //Envio la el id del alumno a eliminar y regenero la propiedad alumnos[] para tenerla actuaizada. Redirijo a la lista de alumnos
  submit(){
    this.alumnosServicio.delete(this.id).subscribe((resp) => {
      this.alumnosServicio.getAll().subscribe((data) => {
        this.alumnos = data;
      })
      this.router.navigate(["/alumnos"])
    })
  };

}
