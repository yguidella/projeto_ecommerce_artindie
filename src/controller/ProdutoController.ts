import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Produto[] = [];

    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(`Produto "${produto.nome}" cadastrado com sucesso!`);
    }

    listarProdutos(): void {
        if (this.listaProdutos.length === 0) {
            console.log("Nenhum produto cadastrado.");
        } else {
            for (let produto of this.listaProdutos) {
                produto.visualizar();
            }
        }
    }

    buscarPorNumero(numero: number): void {
        const produto = this.listaProdutos.find(p => p.numero === numero);
        if (produto) {
            produto.visualizar();
        } else {
            console.log(`Produto com número ${numero} não encontrado.`);
        }
    }

    atualizarProduto(produto: Produto): void {
        const index = this.listaProdutos.findIndex(p => p.numero === produto.numero);
        if (index !== -1) {
            this.listaProdutos[index] = produto;
            console.log(`Produto de número ${produto.numero} atualizado com sucesso!`);
        } else {
            console.log(`Produto com número ${produto.numero} não encontrado.`);
        }
    }

    deletarProduto(numero: number): void {
        const index = this.listaProdutos.findIndex(p => p.numero === numero);
        if (index !== -1) {
            this.listaProdutos.splice(index, 1);
            console.log(`Produto de número ${numero} deletado com sucesso!`);
        } else {
            console.log(`Produto com número ${numero} não encontrado.`);
        }
    }
}