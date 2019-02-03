import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomFormComponent } from './dom-form.component';

describe('DomFormComponent', () => {
  let component: DomFormComponent;
  let fixture: ComponentFixture<DomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
