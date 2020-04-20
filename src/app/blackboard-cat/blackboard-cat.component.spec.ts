import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackboardCatComponent } from './blackboard-cat.component';

describe('BlackboardCatComponent', () => {
  let component: BlackboardCatComponent;
  let fixture: ComponentFixture<BlackboardCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackboardCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackboardCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
