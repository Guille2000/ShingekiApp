import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../interfaces/personaje';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  personajes:Personajes[] = []


  ngOnInit(): void {
    this.heroesService.getPersonajes().subscribe
    (resp => {
      this.personajes = resp
    })

  }

}
