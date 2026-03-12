import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravailabilityComponent } from './caravailability.component';

describe('CaravailabilityComponent', () => {
  let component: CaravailabilityComponent;
  let fixture: ComponentFixture<CaravailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaravailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaravailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
