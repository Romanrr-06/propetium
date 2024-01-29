import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasActualizacionesPage } from './noticias-actualizaciones.page';

describe('NoticiasActualizacionesPage', () => {
  let component: NoticiasActualizacionesPage;
  let fixture: ComponentFixture<NoticiasActualizacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiasActualizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
