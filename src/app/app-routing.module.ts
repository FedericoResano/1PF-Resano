import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { GrillaEstudiantesComponent } from './grilla-estudiantes/grilla-estudiantes.component';
import { InicioComponent } from "./inicio/inicio.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

//Ruteo a todos los componentes

const routes: Routes =[
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'alumnos/agregar',
        component: AgregarComponent
    },
    {
        path:'alumnos',
        component: GrillaEstudiantesComponent
    },
    {
        path:'alumnos/editar/:id',
        component: ModificarComponent
    },
    {
        path:'alumnos/eliminar/:id',
        component: EliminarComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}