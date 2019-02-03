import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDomComponent } from './single-dom.component';

describe('SingleDomComponent', () => {
  let component: SingleDomComponent;
  let fixture: ComponentFixture<SingleDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
