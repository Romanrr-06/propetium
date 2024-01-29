import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BanckPage } from './banck.page';

describe('BanckPage', () => {
  let component: BanckPage;
  let fixture: ComponentFixture<BanckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BanckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
