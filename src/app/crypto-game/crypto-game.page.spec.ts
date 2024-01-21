import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoGamePage } from './crypto-game.page';

describe('CryptoGamePage', () => {
  let component: CryptoGamePage;
  let fixture: ComponentFixture<CryptoGamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CryptoGamePage);
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
