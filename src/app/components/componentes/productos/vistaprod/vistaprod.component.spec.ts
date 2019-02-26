import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaprodComponent } from './vistaprod.component';

describe('VistaprodComponent', () => {
  let component: VistaprodComponent;
  let fixture: ComponentFixture<VistaprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
