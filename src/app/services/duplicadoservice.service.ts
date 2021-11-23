import { Injectable } from '@angular/core';
import { Duplicadomodel } from '../models/duplicadomodel';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class DuplicadoserviceService {

  private dbusuarios= '/registros'
  misUsuariosRef!: AngularFireList<Duplicadomodel>;
  constructor(private db:AngularFireDatabase) {
    this.misUsuariosRef=db.list(this.dbusuarios);
   }

   create(postulado:Duplicadomodel):any{
    // return this.misUsuariosRef.push(postulado)
    return this.misUsuariosRef.set(postulado.cedula,postulado)

  }

}
