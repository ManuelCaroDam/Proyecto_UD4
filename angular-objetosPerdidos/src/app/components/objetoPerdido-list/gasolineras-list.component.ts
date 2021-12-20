import { Component, OnInit } from '@angular/core';
import { ListaObjetosPerdidos } from 'src/app/models/interfaces/objetos-perdidos.interface';
import { GasolinerasService } from 'src/app/services/objetoPerdido.service';

@Component({
  selector: 'app-gasolineras-list',
  templateUrl: './gasolineras-list.component.html',
  styleUrls: ['./gasolineras-list.component.css']
})
export class GasolinerasListComponent implements OnInit {

  listaObjetosList: ListaObjetosPerdidos[] = [];
  
  constructor(private gasolineraService: GasolinerasService) { }

  async ngOnInit(): Promise<void> {
    this.gasolineraService.getObjetoPerdidos().subscribe(resp => {
      let jsonString = JSON.stringify(resp);
    });

  }

}
