import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoninalComponent } from './testimoninal.component';

describe('TestimoninalComponent', () => {
  let component: TestimoninalComponent;
  let fixture: ComponentFixture<TestimoninalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimoninalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoninalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
