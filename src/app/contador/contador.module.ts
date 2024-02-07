import { NgModule } from '@angular/core';
import { contCompo } from './components/contador.component';
// -----------------------------> QUE ES UN MODULO

// Que es un modulo, simplemente es una clase que encapsula todo una función
// Tambien tiene un decorador fuera de la clase

@NgModule({
  declarations: [
    contCompo, // Se declara el componente
  ],
  exports: [
    contCompo, // Aqui exportamos el componente al mundo exterior
    // Es decir afuera del scope de la carpeta contador
  ],
})
export class ContadorModule {}
