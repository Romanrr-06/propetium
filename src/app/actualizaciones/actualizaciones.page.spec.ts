import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizacionesPage } from './actualizaciones.page';

describe('ActualizacionesPage', () => {
  let component: ActualizacionesPage;
  let fixture: ComponentFixture<ActualizacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
