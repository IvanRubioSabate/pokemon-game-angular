import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioRubioComponent } from './iniciar-sessio-rubio.component';

describe('IniciarSessioRubioComponent', () => {
  let component: IniciarSessioRubioComponent;
  let fixture: ComponentFixture<IniciarSessioRubioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioRubioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioRubioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
