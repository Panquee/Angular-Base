import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public nombre = 'batman';
  public edad = 24;

  // Parece ser metodo pero es una propiedad, en si solo llama a las propiedas
  get nameCapitalized(): string {
    return this.nombre.toUpperCase();
  }

  randomMethod(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeName(newName: string): void {
    //TODO:
    this.nombre = newName;
  }

  changeAge(newAge: number): void {
    this.edad = newAge;
  }

  reset(): void {
    this.nombre = 'batman';
    this.edad = 24;
  }
}
