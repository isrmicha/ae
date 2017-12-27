import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleMetasRelatorioComponent } from './controle-metas-relatorio.component';

describe('ControleMetasRelatorioComponent', () => {
  let component: ControleMetasRelatorioComponent;
  let fixture: ComponentFixture<ControleMetasRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleMetasRelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleMetasRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
