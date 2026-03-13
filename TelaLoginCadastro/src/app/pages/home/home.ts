import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // rota para redirecionar página
  constructor(private router: Router){}

  logout(): void{
    localStorage.removeItem('usuarioLogado');  // remover do localStorage usuário logado
    this.router.navigate(['/']);  // redirecionar para a página de login
  }

}
