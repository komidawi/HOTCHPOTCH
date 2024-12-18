import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCalculatorComponent } from './pizza-calculator.component';

describe('PizzaCalculatorComponent', () => {
  let component: PizzaCalculatorComponent;
  let fixture: ComponentFixture<PizzaCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaCalculatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PizzaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
