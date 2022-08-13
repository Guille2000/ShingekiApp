export interface Personajes {
  id?:          number;
  personaje:   string;
  genero:      Genero;
  alter_ego:   string;
  descripcion: string;
  alt_img?:    string;
}

export enum Genero {
  Hombre = "Hombre",
  Mujer = "Mujer",
}
