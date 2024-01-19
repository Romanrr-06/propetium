import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoPage } from './crypto.page';

describe('CryptoPage', () => {
  let component: CryptoPage;
  let fixture: ComponentFixture<CryptoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CryptoPage);
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

