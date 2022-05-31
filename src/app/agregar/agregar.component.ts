import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumnos } from '../alumnos';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  title: string = "Agregar alumno";
  usuario=localStorage.getItem('usuario');
  alumno: Alumnos;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private alumnosServicio: AlumnosService,
    private formBuilder: FormBuilder) {};
    agregarFormGroup: FormGroup = this.formBuilder.group({
      Nombre:['', [Validators.required, Validators.maxLength(100)]],
      Apellido:['', [Validators.required, Validators.maxLength(100)]],
      Mail:['', [Validators.required, Validators.email]],
      Curso:['', [Validators.required]],
    })

  ngOnInit(): void {
  }

  submit(){
    this.alumno= {
      id: 0,
      Nombre: this.agregarFormGroup.controls["Nombre"].value,
      Apellido: this.agregarFormGroup.controls["Apellido"].value,
      Mail: this.agregarFormGroup.controls["Mail"].value,
      Curso: this.agregarFormGroup.controls["Curso"].value,
    };

    this.alumnosServicio.add(this.alumno).subscribe((resp)=> {
      this.router.navigate(["/alumnos"])
    })

  };
}
