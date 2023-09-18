import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-filtro-notas',
  templateUrl: './filtrar-notas.component.html',
  styleUrls: ['./filtrar-notas.component.css']
})
export class FiltroNotasComponent {
  @Input({required : true}) categorias: Categoria[] = [];

  @Output() onFiltroSelecionado: EventEmitter<Categoria | null>;

  constructor() {
    this.onFiltroSelecionado = new EventEmitter();
  }

  selecionarTodas() {
    this.onFiltroSelecionado.emit(null)
  }

  selecionarPorCategoria(categoria: Categoria) {
    this.onFiltroSelecionado.emit(categoria);
  }
}
