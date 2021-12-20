import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ObjetoPerdidoFirebaseService {

  constructor(private firestore: AngularFirestore) { }

}
