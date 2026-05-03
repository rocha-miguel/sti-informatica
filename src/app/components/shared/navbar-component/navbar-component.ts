import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {
  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update(valor => !valor);
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }
}