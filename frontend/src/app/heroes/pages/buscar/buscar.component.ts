import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Personajes } from '../../interfaces/personaje';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {


  termino:string = ''
  personajes:Personajes[] = []
  personajeSeleccionado!:Personajes | undefined;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim()).subscribe
    (personajes => this.personajes = personajes)
  }
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.personajeSeleccionado = undefined;
      return
    }


    const personaje:Personajes = event.option.value
    console.log(personaje)
    this.termino = personaje.personaje
    this.heroesService.getPersonajeId(personaje.id!).subscribe
    (personaje => this.personajeSeleccionado = personaje)
  }



}
