import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {ListaObjetosPerdidos} from '../models/interfaces/objetos-perdidos.interface';


@Injectable({
  providedIn: 'root'
})
export class ObjetoPerdidoFirebaseService {

  constructor(private firestore: AngularFirestore) { }

}
