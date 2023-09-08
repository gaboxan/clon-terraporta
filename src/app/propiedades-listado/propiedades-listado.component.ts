import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propiedades-listado',
  templateUrl: './propiedades-listado.component.html',
  styleUrls: ['./propiedades-listado.component.css']
})
export class PropiedadesListadoComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  operacion:string=''
  tipo:string=''
  comuna:string=''
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
       this.operacion = params['operacion'];
      this.tipo = params['tipo'];
       this.comuna = params['comuna'];
      
    });
   
}
mostrarP(){
      console.log('operacion: '+this.operacion+'tipo: '+this.tipo+'comuna: '+this.comuna)
}
}
