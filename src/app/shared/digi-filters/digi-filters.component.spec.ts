import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiFiltersComponent } from './digi-filters.component';

describe('DigiFiltersComponent', () => {
  let component: DigiFiltersComponent;
  let fixture: ComponentFixture<DigiFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigiFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
