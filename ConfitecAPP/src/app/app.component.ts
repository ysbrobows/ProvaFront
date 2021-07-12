import { Component, Input } from '@angular/core';
import { Usuario } from './models/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConfitecAPP';
  @Input() userSelecionado = new Usuario();
}


