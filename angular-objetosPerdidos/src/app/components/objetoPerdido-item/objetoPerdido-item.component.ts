import { Component, Input, OnInit } from '@angular/core';
import { ListaObjetosPerdidos } from 'src/app/models/interfaces/objetos-perdidos.interface';
import { ObjetoPerdidoFirebaseService } from 'src/app/services/objetoPerdido-firebase.service';

@Component({
  selector: 'app-objetoPerdido-item',
  templateUrl: './objetoPerdido-item.component.html',
  styleUrls: ['./objetoPerdido-item.component.css']
})
export class ObjetoPerdidoItemComponent implements OnInit {
  @Input() objetoPerdido!: ListaObjetosPerdidos;

  constructor(private objetoPerdidoFirebaseService: ObjetoPerdidoFirebaseService) { }

  ngOnInit(): void {
    console.log(this.objetoPerdido);
  }

  
}
