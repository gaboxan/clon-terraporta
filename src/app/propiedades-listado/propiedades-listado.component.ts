import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-propiedades-listado',
  templateUrl: './propiedades-listado.component.html',
  styleUrls: ['./propiedades-listado.component.css'],
})
export class PropiedadesListadoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router:Router) {}
  operacion: string = '';
  tipo: string = '';
  comuna: string = '';
  selectedTipo: string;
  selectedOperacion: string;
  valorDesde: number;
  valorHasta: number;
  showOverlay = false;

  cartas = [
    {
      image: '../../assets/img/agentes/1.jpg',
      titulo: 'Condominio Granja Osiris',
      agente: 'Consuelo Arias',
      ubicacion: 'Los Ángeles Camino el Natre',
      precio: 260000000,
      operacion: 'Venta',
      tipo: 'Casa',
      metrosCuadrados: '130m2',
      habitaciones: 5,
      banos: 3,
      propertyid:3
    },
    {
      image: '../../assets/img/agentes/2.jpg',
      titulo: 'Sector El Huertón, Camino Antuco',
      agente: 'Consuelo Arias',
      ubicacion: 'Los Ángeles Camino Antuco',
      precio: 85000000,
      operacion: 'Venta',
      tipo: 'Casa',
      metrosCuadrados: '5000m2',
      habitaciones: 0,
      banos: 0,
      propertyid:1
    },
    {
      image: '../../assets/img/agentes/1.jpg',
      titulo: 'Casa Nueva, Condominio Bosque Laguna',
      agente: 'Natalia Ríos',
      ubicacion: 'Los Ángeles Doctor Manuel Rioseco',
      precio: 800000,
      operacion: 'Arriendo',
      tipo: 'Departamento',
      metrosCuadrados: '109m2',
      habitaciones: 3,
      banos: 3,
      propertyid:2
    },
  ];
  cartasFiltradas: any[] = [];

  aplicarFiltros() {
    this.cartasFiltradas = [];

    for (let i = 0; i < this.cartas.length; i++) {
      const carta = this.cartas[i];

      const cumpleTipo = !this.selectedTipo || carta.tipo === this.selectedTipo;
      const cumpleOperacion =
        !this.selectedOperacion || carta.operacion === this.selectedOperacion;
      const cumpleValorDesde =
        !this.valorDesde || carta.precio >= this.valorDesde;
      const cumpleValorHasta =
        !this.valorHasta || carta.precio <= this.valorHasta;

      if (
        cumpleTipo &&
        cumpleOperacion &&
        cumpleValorDesde &&
        cumpleValorHasta
      ) {
        this.cartasFiltradas.push(carta);
      }
    }
    console.log(this.cartasFiltradas);
    console.log(this.cartas);
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.operacion = params['operacion'];
      this.tipo = params['tipo'];
      this.comuna = params['comuna'];
      this.selectedOperacion= this.operacion
      this.selectedTipo=this.tipo
    });
    this.cartasFiltradas = [];

    for (let i = 0; i < this.cartas.length; i++) {
      const carta = this.cartas[i];

      const cumpleTipo = !this.tipo || carta.tipo === this.tipo;
      const cumpleOperacion =
        !this.operacion || carta.operacion === this.operacion;
      const cumpleValorDesde =
        !this.valorDesde || carta.precio >= this.valorDesde;
      const cumpleValorHasta =
        !this.valorHasta || carta.precio <= this.valorHasta;

      if (
        cumpleTipo &&
        cumpleOperacion &&
        cumpleValorDesde &&
        cumpleValorHasta
      ) {
        this.cartasFiltradas.push(carta);
      }
    }
  }
  goDetails(propertyid:string){
    const url = `/propiedadDetalles?propertyid=${propertyid}`;
    this.router.navigateByUrl(url)
  }
  mostrarP() {
    console.log(
      'operacion: ' +
        this.operacion +
        'tipo: ' +
        this.tipo +
        'comuna: ' +
        this.comuna
    );
  }
}
