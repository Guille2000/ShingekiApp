import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Genero, Personajes } from '../../interfaces/personaje';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  constructor(private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private snackBar:MatSnackBar,
    public dialog:MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return
    }

    this.activatedRoute.params
    .pipe(
      switchMap(({id} ) => this.heroesService.getPersonajeId(id))
    )
    .subscribe(personaje => this.personaje = personaje)
  }

  generos = [
    {
      id: 2,
      genero:'Mujer'
    },
    {
      id:1,
      genero:'Hombre'
    }
  ]

  personaje:Personajes = {
    personaje:'',
    alter_ego:'',
    genero:Genero.Hombre,
    descripcion:'',
    alt_img:''
  }

  guardar(){
    console.log(this.personaje)
    if(this.personaje.personaje.trim().length === 0){
      return
    }

    if(this.personaje.id){
      this.heroesService.editarPersonaje(this.personaje)
      .subscribe(personaje => this.mostrarSnakbar('Personaje actualizado'))
    } else {

      this.heroesService.agregarPersonaje(this.personaje)
      .subscribe(personaje => {
        console.log(personaje)
        this.router.navigate(['/heroes/listado', personaje.id])
        this.mostrarSnakbar('Personaje creado')
      })
    }
  }

  borrar(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      width:'250px',
      data:this.personaje
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.heroesService.eliminarPersonaje(this.personaje.id!)
        .subscribe(resp => {
          this.router.navigate(['/heroes'])
        })
      }
    })
  }

  mostrarSnakbar(mensaje:string){
    this.snackBar.open(mensaje, 'Ok!', {
      duration:2500
    })
  }
}
