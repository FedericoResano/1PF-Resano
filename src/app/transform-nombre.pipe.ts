import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class TransformNombrePipe implements PipeTransform {

  transform(apellido:string, args:string): string {
    let ApellidoNombre:string;
    ApellidoNombre= apellido + ', ' + args;
    return `${ApellidoNombre}`;
  }

}
