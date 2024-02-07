import { Component, Signal } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public listNames: string[] = ['Blanca', 'Yolanda', 'Vittoria', 'Belucci'];

  public personDelete?: string;

  deletePerson() {
    this.personDelete = this.listNames.pop();
  }
}
