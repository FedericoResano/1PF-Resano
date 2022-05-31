import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from './alumnos';

@Injectable({
  providedIn: 'root'
})


export class AlumnosService {

  // archivo alumnos.json ubicado en la carpeta de scr/api Iniciado con el comando json-server --watch alumnos.json desde CMD
  private alumnosUrl= 'http://localhost:3000/alumnos';

  constructor(private http: HttpClient) { }

  //Metodo get para que traiga todos los alumnos y cargar la lista
  getAll():Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(this.alumnosUrl);
  }

  //Metodo get para recuperar la informacion de un alumno y cargar los formularios de Modificar y Eliminar
  get(id:number):Observable<Alumnos>{
    return this.http.get<Alumnos>(this.alumnosUrl +'/' + id);
  }

  //Metodo update para modificar alumno
  update(alumnos:Alumnos){
    return this.http.put(this.alumnosUrl + '/' +alumnos.id, alumnos)
  }

  //metodo delete para eliminar alumno
  delete(id:number){
    return this.http.delete(this.alumnosUrl + '/' + id);
  }

  //post para dar de alta un alumno
  add(alumnos:Alumnos){
    return this.http.post(this.alumnosUrl, alumnos);
  }
}
