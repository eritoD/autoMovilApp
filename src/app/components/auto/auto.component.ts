import { Component, OnInit } from '@angular/core';
import {  Aut,AutoService } from '../../services/auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent  implements OnInit {

  aut:Aut = {
    nombre:"",
    patente:"",
  }
  constructor(private autService:AutoService,private router: Router) { }

  ngOnInit() {}

  addAut(){
    this.autService.addAut(this.aut).then(()=>{
      alert("Viaje agregado exitosamente!")
      this.aut= {nombre:"",patente:""};
      this.router.navigate(["/inicio"]);
  }).catch(error=>{alert("Error al momento de registrar destino!"+error)})
}


  irANuevaPagina() {
    this.router.navigateByUrl('/nueva-pagina');
  }
}
