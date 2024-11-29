import { Component, inject } from '@angular/core';
import { producerIncrementEpoch } from '@angular/core/primitives/signals';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/api/autenticacao.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule]
})
export class CadastrarProdutoPage {
  form: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  files: File[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nomeProduto: new FormControl('', [Validators.required]),
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

  createTagsList() {
    const tags: string = this.form.value.tags
    const sliceTags = tags.split(",");

    return sliceTags.map((tag) => {
      tag.slice();
    });
  }

  onSubimt() {
    const tagsList = this.createTagsList();
    this.form.patchValue({
      tags: tagsList
    })
    console.log(this.files);
    if (this.form.valid) {
      this.authService.registerProduct(this.form.value, this.files).subscribe({
        next: () => {
          this.router.navigate(['home']);
        },
      });
    }
  }
}
