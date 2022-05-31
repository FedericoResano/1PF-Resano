import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumnos } from '../alumnos';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  
  //Me traigo la info del usuario y genero la propiedad de alumno.
  usuario=localStorage.getItem('usuario');
  title: string = "Editar alumno";
  alumno: Alumnos;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private alumnosServicio: AlumnosService,
    private formBuilder: FormBuilder) {};

    //Armo las propiedades del formulario.
    modificarFormGroup: FormGroup = this.formBuilder.group({
      Nombre:['', [Validators.required, Validators.maxLength(100)]],
      Apellido:['', [Validators.required, Validators.maxLength(100)]],
      Mail:['', [Validators.required, Validators.email]],
      Curso:['', [Validators.required, Validators.maxLength(50)]],
    })

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      var id = params["id"];
      this.alumnosServicio.get(id).subscribe((data) => {
        this.alumno = data;
        this.modificarFormGroup.patchValue(data);
      })
    })
  }
  //Cargo los datos que tengo en el formulario en la propiedad de alumno y se la paso en un update al servicio. Redirijo a la pagina del listado
  submit(){
    this.alumno.Apellido=this.modificarFormGroup.get("Apellido")?.value;
    this.alumno.Nombre=this.modificarFormGroup.get("Nombre")?.value;
    this.alumno.Mail=this.modificarFormGroup.get("Mail")?.value;
    this.alumno.Curso=this.modificarFormGroup.get("Curso")?.value;

    this.alumnosServicio.update(this.alumno).subscribe((resp)=> {
      this.router.navigate(["alumnos"]);
    })
   }

   
}
