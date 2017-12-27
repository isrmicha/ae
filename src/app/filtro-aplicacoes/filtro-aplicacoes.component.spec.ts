import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAplicacoesComponent } from './filtro-aplicacoes.component';

describe('FiltroAplicacoesComponent', () => {
  let component: FiltroAplicacoesComponent;
  let fixture: ComponentFixture<FiltroAplicacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroAplicacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroAplicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
