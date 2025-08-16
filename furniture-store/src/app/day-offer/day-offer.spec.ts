import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOffer } from './day-offer';

describe('DayOffer', () => {
  let component: DayOffer;
  let fixture: ComponentFixture<DayOffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayOffer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayOffer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
