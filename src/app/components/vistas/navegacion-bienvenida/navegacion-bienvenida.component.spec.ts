import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionBienvenidaComponent } from './navegacion-bienvenida.component';

describe('NavegacionBienvenidaComponent', () => {
  let component: NavegacionBienvenidaComponent;
  let fixture: ComponentFixture<NavegacionBienvenidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionBienvenidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
