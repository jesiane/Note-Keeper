import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { Nota } from 'src/app/models/nota';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent {
  categoria: Categoria;
  notas: Nota[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private notaService: NotaService,
    private router: Router,
    private toastService: ToastrService) {
    this.categoria = {id: 0, titulo: '',}
  }

  ngOnInit(): void {
   this.categoriaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((c) => {
    this.categoria = c;
   });

   this.notaService.selecionarTodos().subscribe((notas) => {
    this.notas = notas;
  });
  }

  excluirCategoria() {
    this.categoriaService.excluirCategoria(this.categoria).subscribe((categoria) => {
      this.toastService.success(`Categoria excluída com sucesso`, 'Success');
      this.router.navigate(['/categorias', 'listar']);
      });
  }
}
