import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoPage } from './catalogo.page';

describe('CatalogoPage', () => {
  let component: CatalogoPage;
  let fixture: ComponentFixture<CatalogoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatalogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
