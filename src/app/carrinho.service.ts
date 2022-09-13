import { Injectable } from '@angular/core';
import { IProdutoCarrinho, produtos } from './produtos';
import { ProdutosService } from './produtos.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: IProdutoCarrinho[] = [];

  constructor(
    private produtoService:ProdutosService
  ) { }

  obtemCarrinho() {
   this.items = JSON.parse(localStorage.getItem("carrinho") || "[]");
   return this.items;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.items.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.items));
  }

  removerProdutoCarrinho(produtoId: number) {
    this.items = this.items.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.items))
  }

  limparCarrinho() {
    this.items = [];
    localStorage.clear();
  }

}
