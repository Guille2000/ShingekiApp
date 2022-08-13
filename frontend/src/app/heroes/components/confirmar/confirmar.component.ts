import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personajes } from '../../interfaces/personaje';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialog:MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Personajes,
    ) { }

  ngOnInit(): void {
  }
  borrar(){
    this.dialog.close(true)

  }
  cerrar(){
    this.dialog.close()
  }

}
