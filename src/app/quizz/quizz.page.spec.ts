import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizzPage } from './quizz.page';

describe('QuizzPage', () => {
  let component: QuizzPage;
  let fixture: ComponentFixture<QuizzPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuizzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
