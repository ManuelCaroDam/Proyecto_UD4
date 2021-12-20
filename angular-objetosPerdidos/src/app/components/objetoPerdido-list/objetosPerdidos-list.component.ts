import { Component, OnInit } from '@angular/core';
import { ListaObjetosPerdidos } from 'src/app/models/interfaces/objetos-perdidos.interface';
import { ObjetosPerdidosService } from 'src/app/services/objetoPerdido.service';

@Component({
  selector: 'app-objetosPerdidos-list',
  templateUrl: './objetosPerdidos-list.component.html',
  styleUrls: ['./objetosPerdidos-list.component.css']
})
export class GasolinerasListComponent implements OnInit {

  listaObjetosList: ListaObjetosPerdidos[] = [];
  
  constructor(private objetosPerdidosService: ObjetosPerdidosService) { }

  async ngOnInit(): Promise<void> {
    this.objetosPerdidosService.getObjetoPerdidos().subscribe(resp => {
      let jsonString = JSON.stringify(resp);
    });

  }

}
