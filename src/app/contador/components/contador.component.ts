import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h3>{{ contador }}</h3>
    <button (click)="incrementar(1)">+1</button>
    <button (click)="incrementar(-1)">-1</button>
    <button (click)="reset()">reset</button>
  `,
})
export class contCompo {
  constructor() {}
  contador = 10;

  incrementar(value: number) {
    this.contador += value;
  }
  reset() {
    this.contador = 10;
  }
}
