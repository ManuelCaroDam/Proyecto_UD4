import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  getDireccionObjeto() {
    return localStorage.getItem('direccion')? localStorage.getItem('direccion') : 'Login';
  }

  getMunicipio() {
    return localStorage.getItem('municipio')? localStorage.getItem('municipio') : 'Login';
  }

  logout() {
    this.firebaseAuth.signOut().then(resp => {
      localStorage.clear();
      this.router.navigate(['']);
    });
  }

}
