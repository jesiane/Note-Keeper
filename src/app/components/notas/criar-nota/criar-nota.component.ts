import { Component } from '@angular/core';
import { Nota } from '../../../models/nota';
import { NotaService } from '../../../services/nota.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css'],
})
export class CriarNotaComponent {
    nota: Nota;
    categorias: Categoria[] = [];

    constructor(
        private notaService: NotaService,
        private categoriaService: CategoriaService,
        private router: Router,
        private toastService: ToastrService
    ) {
        this.nota = {
            id: 0,
            titulo: '',
            conteudo: '',
            tema: 'dark',
            categoriaId: 1,
        }
    }


    ngOnInit(): void {
        this.categoriaService.selecionarTodos().subscribe((categoriasLista) => {
            this.categorias = categoriasLista;
        });

        this.nota.categoria = this.categorias[0] ?? null;
        this.nota.categoriaId = this.nota.categoria.id;
    }

    criarNota() {
        this.notaService.criarNota(this.nota).subscribe((nota) => {
            this.toastService
                .success(`Nota ${nota.titulo} criada com sucesso`, 'Success');

            this.router.navigate(['/notas', 'listar']);
        });
    }

    definirCategoria(categoria: Categoria) {
        this.nota.categoria = categoria;
        this.nota.categoriaId = categoria.id;
    }


    verificarCategorias() {
        if (this.categorias.length == 0) {
            this.toastService.warning(
                `Cadastre uma categoria primeiro para poder criar uma nota`,
                'Warning'
            );
            this.router.navigate(['/categorias', 'listar']);
        }
    }
}