import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-propiedad-detalles',
  templateUrl: './propiedad-detalles.component.html',
  styleUrls: ['./propiedad-detalles.component.css'],
})
export class PropiedadDetallesComponent {
  propertyId: number;
  detalles = [
    {
      id:'1',
      fono: '+569 99772206',
      correo: 'nataliarios@terraporta.cl',
      tipoterreno: 'Sup. terreno',
      titulo: 'Sector El Huertón, Camino Antuco',
      banos: 0,
      ubicacion: 'Los Ángeles Camino Antuco',
      habitaciones: 0,
      precio: 85000000,
      metrosCuadrados: '5000m2',
      agente: 'Natalia Ríos',
      descripcion:
        'Camino Antuco a pocos minutos de la ciudad, se encuentran estas hermosas parcelas de 5000m2. Los sitios son parte de un proyecto de subdivisión con rol asignado, cuentan con camino y luz soterrada. A solo 5 km de Los Ángeles',
    },
    {
      id:'2',
      fono: '+569 76143615',
      correo: 'consueloarias@terraporta.cl',
      tipoterreno: 'Sup. construidos',
      titulo: 'Casa Nueva, Condominio Bosque Laguna',
      habitaciones: 3,
      banos: 3,
      ubicacion: 'Los Ángeles ',
      precio: 800000,
      metrosCuadrados: '211 m²',
      agente: 'Consuelo Arias',
      descripcion:
        'Camino Antuco a pocos minutos de la ciudad, se encuentran estas hermosas parcelas de 5000m2. Los sitios son parte de un proyecto de subdivisión con rol asignado, cuentan con camino y luz soterrada. A solo 5 km de Los Ángeles',
    },
    {
      id:'3',
      fono: '+569 76143615',
      correo: 'consueloarias@terraporta.cl',
      tipoterreno: 'Sup. construidos',
      titulo: 'Condominio Granja Osiris',
      habitaciones: 5,
      banos: 3,
      ubicacion: 'Los Ángeles',
      precio: 260000000,
      metrosCuadrados: '5000 m²',
      agente: 'Consuelo Arias',
      descripcion:
        'Vivienda en condominio con acceso controlado las 24 horas. A pocos minutos del centro de la ciudad.',
    },
  ];
  showOthers:any=[]
  constructor(private route: ActivatedRoute, private router:Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.propertyId = params['propertyid'];
      const propertyIdS = this.propertyId.toString();
  
     
      const detallesCopy = [...this.detalles];
  
      this.detalles = detallesCopy.filter(
        (detalle) => detalle.id === propertyIdS
      );
      this.showOthers = detallesCopy.filter(
        (detalle) => detalle.id !== propertyIdS
      );
  
      console.log(this.detalles, this.propertyId, 'otras: ', this.showOthers);
    });
  }
  goDetails(propertyid:string){
    const url = `/propiedadDetalles?propertyid=${propertyid}`;
    window.open(url, '_blank');
  }
  

  }

