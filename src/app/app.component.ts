import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dominykasmakarovas.github.io';
  num = 0;

  addNum() {
    this.num++;
  }
}
