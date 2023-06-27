import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemDogsPage } from './listagem-dogs.page';

describe('ListagemDogsPage', () => {
  let component: ListagemDogsPage;
  let fixture: ComponentFixture<ListagemDogsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemDogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
