import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = [{name: 'Nulo', votes: 0}, {name: 'Branco', votes: 0}]
  state = 'open'
  title = 'Eleições 2020'
}