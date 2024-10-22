import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from '../../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent  implements OnInit {
  car:Car = {
    nombre:"",
    patente:"",
    destino:"",
    capacidad:0,
    tarifa:0,
    telefono:0
  }

  constructor(private carService:CarsService, private router:Router) { }

  ngOnInit() {}

  addCar(){
    this.carService.addCar(this.car).then(()=>{
      alert("Viaje agregado exitosamente!")
      this.car= {nombre:"",patente:"",destino:"",capacidad:0,tarifa:0,telefono:0};
      this.router.navigate(["/inicio"]);
  }).catch(error=>{alert("Error al momento de registrar destino!"+error)})
}

}
