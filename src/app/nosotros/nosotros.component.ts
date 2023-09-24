import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent {
  integrantes: any = [
    {
      img: '../../assets/img/agentes/yomismo.jpg',
      nombre: 'Gabriel Figueroa',
      descripcion: 'Corredor fundador de agencia Propiedades Figueroa. Egresado de la carrera de Ingenieria en informática. ',
    },
    {
      img: '../../assets/img/agentes/cristina_avatar.png',
      nombre: 'Empleado 1',
      descripcion: 'Empleado de Propieades Figueroa de identificacion 1 ',
    }, {
      img: '../../assets/img/agentes/dana_avatar.png',
      nombre: 'Empleado 2',
      descripcion: 'Empleado de Propieades Figueroa de identificacion 2  ',
    },
  ];
}

