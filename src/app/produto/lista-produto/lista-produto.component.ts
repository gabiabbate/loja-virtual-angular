import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtosList : Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        produtosResult => {
            this.produtosList = produtosResult;
            console.log(produtosResult);
        },
        error => console.log(error)
      );
  }
}