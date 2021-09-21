import { Injectable } from '@angular/core';
import { mesas } from '../db/mesas.db';


export interface Mesas {
  id_table?: number,
  name_table?: string,
  id_zone?: string,
  max?: string,
  min?: string,
  x?: string,
  y?: string,
  imagen?: string
}


@Injectable({
  providedIn: 'root'
})


export class MesasService {
  arrMesas: Mesas[];

  constructor() { }


  getAllMesas(): Promise<Mesas[]> {
    return new Promise((resolve, rejects) => {
      resolve(this.arrMesas)
    })
  }

  getByNombre(pNombre: string): Promise<Mesas[]> {
    return new Promise<Mesas[]>((resolve, reject) => {
      const arrFiltrado = [];

      for (let mesa of this.arrMesas) {
        if (mesa.name_table === pNombre) {
          arrFiltrado.push(mesa)
        }
      }
      resolve(arrFiltrado)
    })

  }
}









