import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleList2Component } from './people-list2.component';

describe('PeopleList2Component', () => {
  let component: PeopleList2Component;
  let fixture: ComponentFixture<PeopleList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
