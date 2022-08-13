import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Personajes } from '../../interfaces/personaje';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  personaje!: Personajes
  constructor(private activatedRoute: ActivatedRoute,
    private heroesService:HeroesService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getPersonajeId(id))
    )
    .subscribe(personaje => this.personaje = personaje )
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
