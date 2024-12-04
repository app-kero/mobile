import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {ProdutoService} from "../../core/api/produto.service";

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule]
})
export class CadastrarProdutoPage {
  form: FormGroup;
  productService = inject(ProdutoService);
  router = inject(Router);
  files: File[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      local: new FormControl('', [Validators.required]),
      horario: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required])
    })
  }

  onFileChange(event: any): void {
    this.files = Array.from(event.target.files);
  }

  createTagsList(): string[] {
    const tags: string = this.form.value.tags
    return tags.split(",").map(tag => tag.trim());
  }

  onSubimt() {
    this.form.patchValue({
      tags: this.createTagsList()
    })
    if(this.form.valid) {
      this.productService.registerProduct(this.form.value, this.files).subscribe({
        next: () => {
          this.router.navigate(['home']);
        },
      });
    }
  }
}
