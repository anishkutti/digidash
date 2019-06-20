import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDashComponent } from './analysis-dash.component';

describe('AnalysisDashComponent', () => {
  let component: AnalysisDashComponent;
  let fixture: ComponentFixture<AnalysisDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
