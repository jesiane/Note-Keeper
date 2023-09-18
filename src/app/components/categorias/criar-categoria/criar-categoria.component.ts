import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent {
  categoria: Categoria;

  constructor(
      private categoriaService: CategoriaService,
      private router: Router,
      private toastService: ToastrService
      ) 
      {
          this.categoria = {
              id: 0,
              titulo: '',
          }
      }

  criarCategoria() {
      this.categoriaService.criarCategoria(this.categoria).subscribe((categoria) => {
          this.toastService
          .success(`Categoria ${categoria.titulo} criada com sucesso`, 'Success');
          
          this.router.navigate(['/categorias', 'listar']);
      });
  }
}
