import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../../interfaces/personaje';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() personaje!: Personajes

  constructor() { }

  ngOnInit(): void {
  }

}
