import { Component, Input, OnInit } from '@angular/core';
import { ListaObjetosPerdidos } from 'src/app/models/interfaces/objetos-perdidos.interface';
import { GasolinerasFirebaseService } from 'src/app/services/objetoPerdido-firebase.service';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  @Input() gasolinera!: ListaObjetosPerdidos;

  constructor(private gasolineraFirebaseService: GasolinerasFirebaseService) { }

  ngOnInit(): void {
    console.log(this.gasolinera);
  }

  addFavorito() {
    this.gasolineraFirebaseService.addFavorite(this.gasolinera).then(resp => {

    });
  }

}
