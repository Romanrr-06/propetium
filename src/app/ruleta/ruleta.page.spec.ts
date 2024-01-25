import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RuletaPage } from './ruleta.page';

describe('RuletaPage', () => {
  let component: RuletaPage;
  let fixture: ComponentFixture<RuletaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RuletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
