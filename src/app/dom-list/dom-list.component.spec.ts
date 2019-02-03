import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomListComponent } from './dom-list.component';

describe('DomListComponent', () => {
  let component: DomListComponent;
  let fixture: ComponentFixture<DomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
