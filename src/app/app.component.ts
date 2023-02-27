import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dominykasmakarovas.github.io';
  num = 0;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Dominykas Makarovas');
  }

  addNum() {
    this.num++;
  }
}
