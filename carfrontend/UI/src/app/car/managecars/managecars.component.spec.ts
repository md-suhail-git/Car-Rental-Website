import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecarsComponent } from './managecars.component';

describe('ManagecarsComponent', () => {
  let component: ManagecarsComponent;
  let fixture: ComponentFixture<ManagecarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagecarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
