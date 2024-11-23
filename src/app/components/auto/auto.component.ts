import { Component, OnInit } from '@angular/core';
import {  AutoService } from '../../services/vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent  implements OnInit {

  // aut:Aut = {
  //   nombre:"",
  //   patente:"",
  // }
  constructor(private router: Router) { }

  ngOnInit() {}

//   addAuto(){
//     this.autoService.addAuto(this.aut).then(()=>{
//       alert("Viaje agregado exitosamente!")
//       this.aut= {nombre:"",patente:"",destino:"",capacidad:0,tarifa:0,telefono:0};
//       this.router.navigate(["/inicio"]);
//   }).catch(error=>{alert("Error al momento de registrar destino!"+error)})
// }


  irANuevaPagina() {
    this.router.navigateByUrl('/nueva-pagina');
  }
}
