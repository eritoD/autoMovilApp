import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  private animation!:Animation;
  constructor(private aService:AuthService, private router:Router, private aCtrl:AnimationController) { }

  ngOnInit() {
  }

  logout(){
    this.aService.logout();
    alert("Sesión Cerrada")
    this.router.navigate(["/home"]);
  }
  ngAfterViewInit(){
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.auto') as HTMLElement)
    .iterations(Infinity)
    .duration(7000)
    .keyframes([
      { offset: 0, transform: 'translateY(0px) rotate(1deg)', opacity: '1' },
      { offset: 0.5, transform: 'translateY(0px) rotate(360deg)', opacity: '1' },
      { offset: 0.8, transform: 'translateY(0px) rotate(360deg)', opacity: '0.5 ' }
    ]);
    
    this.animation.play();
    
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.square') as HTMLElement)
    .iterations(Infinity)
    .duration(7000)
    .keyframes([
      { offset: 0, transform: 'translateX(1px) rotate(0deg)', opacity: '1' },
      { offset: 0.5, transform: 'translateX(300px) rotate(180deg)', opacity: '1' },
      { offset: 0.8, transform: 'translateX(600px) rotate(360deg)', opacity: '0.5 ' }
    ]);
    
    this.animation.play();
  }
}
