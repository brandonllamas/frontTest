import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombre:string= ""
  edad:string= ""
  correo:string= ""
  tipo:string= ""
  ano_mes:string= ""
  tipo_p:string= "P"
  tipo_s:string= "H"
}
