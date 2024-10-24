import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from '../../services/cars.service';

@Component({
  selector: 'app-viaje-info',
  templateUrl: './viaje-info.component.html',
  styleUrls: ['./viaje-info.component.scss'],
})
export class ViajeInfoComponent  implements OnInit {
  cars:Car[]=[]
  constructor(private carsService:CarsService) { }

  ngOnInit() {}
}
