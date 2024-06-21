import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentComponent } from './accomplishment.component';

describe('AccomplishmentComponent', () => {
  let component: AccomplishmentComponent;
  let fixture: ComponentFixture<AccomplishmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomplishmentComponent]
    });
    fixture = TestBed.createComponent(AccomplishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
