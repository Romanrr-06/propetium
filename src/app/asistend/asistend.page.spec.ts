import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistendPage } from './asistend.page';

describe('AsistendPage', () => {
  let component: AsistendPage;
  let fixture: ComponentFixture<AsistendPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
