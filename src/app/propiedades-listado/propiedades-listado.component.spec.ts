import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesListadoComponent } from './propiedades-listado.component';

describe('PropiedadesListadoComponent', () => {
  let component: PropiedadesListadoComponent;
  let fixture: ComponentFixture<PropiedadesListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropiedadesListadoComponent]
    });
    fixture = TestBed.createComponent(PropiedadesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
