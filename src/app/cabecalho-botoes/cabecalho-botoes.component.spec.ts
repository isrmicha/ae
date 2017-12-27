import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoBotoesComponent } from './cabecalho-botoes.component';

describe('CabecalhoBotoesComponent', () => {
  let component: CabecalhoBotoesComponent;
  let fixture: ComponentFixture<CabecalhoBotoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoBotoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
