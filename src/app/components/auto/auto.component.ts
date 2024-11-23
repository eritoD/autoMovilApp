import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  irANuevaPagina() {
    this.router.navigateByUrl('/nueva-pagina');
  }
}
