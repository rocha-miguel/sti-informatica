import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/shared/navbar-component/navbar-component";
import { FooterComponent } from "./components/shared/footer-component/footer-component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stionline-web');
}
