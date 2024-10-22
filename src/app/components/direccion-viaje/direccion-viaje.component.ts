import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonIcon, IonItem, IonLabel } from '@ionic/angular';
import { MapDireccionViajeComponent } from '../map-direccion-viaje/map-direccion-viaje.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-direccion-viaje',
  templateUrl: './direccion-viaje.component.html',
  styleUrls: ['./direccion-viaje.component.scss'],
  standalone: true,
  imports: [IonButton, IonButtons,
    IonLabel, IonIcon,
    IonItem,
    MapDireccionViajeComponent,
    RouterModule
  ]
})
export class DireccionViajeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
