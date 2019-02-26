import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostaccountUComponent } from './lostaccount-u.component';

describe('LostaccountUComponent', () => {
  let component: LostaccountUComponent;
  let fixture: ComponentFixture<LostaccountUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostaccountUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostaccountUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
