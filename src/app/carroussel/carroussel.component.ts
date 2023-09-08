import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'],
})
export class CarrousselComponent {
  constructor(private router: Router) {}
  selectedComuna: string = '';
  selectedTipo: string = '';
  selectedOperacion: string = '';
  mostrar() {
    console.log(
      'operacion:',
      this.selectedOperacion,
      'tipo: ',
      this.selectedTipo,
      'comuna: ',
      this.selectedComuna
    );
  }
  buscarPropiedades() {
    const encodedOperacion = encodeURIComponent(this.selectedOperacion);
    const encodedTipo = encodeURIComponent(this.selectedTipo);
    const encodedComuna = encodeURIComponent(this.selectedComuna);

    const url = `/propiedades?operacion=${encodedOperacion}&tipo=${encodedTipo}&comuna=${encodedComuna}`;


    
    this.router.navigateByUrl(url)
  }
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
}
