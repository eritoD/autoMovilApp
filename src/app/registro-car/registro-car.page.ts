import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-registro-car',
  templateUrl: './registro-car.page.html',
  styleUrls: ['./registro-car.page.scss'],
})
export class RegistroCarPage implements OnInit {
  private animation!:Animation;
  constructor(private aCtrl:AnimationController) { }

  ngOnInit() {
  }
  
  
}
