import { Component, Input } from '@angular/core';
import { Nota } from 'src/app/models/nota';

// One-way Data Binding

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css'],
})
export class CardNotaComponent {
  @Input() nota: Nota = {
    id: 0,
    titulo: '',
    conteudo: '',
    tema: 'dark',
  };
}
