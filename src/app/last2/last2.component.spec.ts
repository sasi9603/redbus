import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Last2Component } from './last2.component';

describe('Last2Component', () => {
  let component: Last2Component;
  let fixture: ComponentFixture<Last2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Last2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Last2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
