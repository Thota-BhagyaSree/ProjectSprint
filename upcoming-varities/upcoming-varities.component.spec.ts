import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingVaritiesComponent } from './upcoming-varities.component';

describe('UpcomingVaritiesComponent', () => {
  let component: UpcomingVaritiesComponent;
  let fixture: ComponentFixture<UpcomingVaritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingVaritiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingVaritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
