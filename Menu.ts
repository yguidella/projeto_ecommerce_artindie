import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { ProdutoArte } from "./src/model/ProdutoArte";

export function main(){

    let produtoController = new ProdutoController();
    let opcao: number;
    let continuar: boolean = true;

    do{
        console.log("\n*****************************************************");
        console.log("                  Galeria Artindie                   ");
        console.log("*****************************************************");
        console.log("1 - Cadastrar Produto                                ");
        console.log("2 - Listar os Produtos                               ");
        console.log("3 - Buscar Produto por Número                        ");
        console.log("4 - Atualizar Produtos                               ");
        console.log("5 - Apagar Produto                                   ");
        console.log("6 - Buscar Produto por Artista                       ");
        console.log("0 - Sair                                             ");
        console.log("*****************************************************");

        opcao = readlinesync.questionInt("\nEntre com a opção desejada ");

        switch(opcao){

            case 1:
                console.log("\nCadastrar Produto");
                const novoProduto = new ProdutoArte();
                novoProduto.numero = readlinesync.questionInt("Digite o número do produto: ");
                novoProduto.nome = readlinesync.question("Digite o nome do produto: ");
                novoProduto.preco = readlinesync.questionFloat("Digite o preço do produto: ");
                novoProduto.categoria = readlinesync.question("Digite a categoria do produto: ");
                novoProduto.artista = readlinesync.question("Digite o nome do artista: ");
                produtoController.cadastrarProduto(novoProduto);
            break;

            case 2:
                console.log("\nListar os Produtos");
                produtoController.listarProdutos();
            break;

            case 3:
                console.log("\nBuscar Produto por Número");
                const numBusca = readlinesync.questionInt("Digite o número do produto para buscar: ");
                produtoController.buscarPorNumero(numBusca);
            break;

            case 4:
                console.log("\nAtualizar Produtos");
                const numAtualiza = readlinesync.questionInt("Digite o número do produto para atualizar: ");
                const produtoAtualizar = new ProdutoArte();
                produtoAtualizar.numero = numAtualiza;
                produtoAtualizar.nome = readlinesync.question("Digite o novo nome do produto: ");
                produtoAtualizar.preco = readlinesync.questionFloat("Digite o novo preço do produto: ");
                produtoAtualizar.categoria = readlinesync.question("Digite a nova categoria do produto: ");
                produtoController.atualizarProduto(produtoAtualizar); 

            break;

            case 5:
                console.log("\nApagar Produto");
                const numDeleta = readlinesync.questionInt("Digite o número do produto para deletar: ");
                produtoController.deletarProduto(numDeleta);
                
            break;

            case 6:
                var artistaBusca = readlinesync.question("Digite o nome do artista: ");
                produtoController.buscarPorArtista(artistaBusca);
            break;

            case 0:
                console.log("\nSistema encerrado!");
                sobre();
                continuar = false;
            break;

            default:
                console.log("\nOpção inválida!");
                
        }

    }while(continuar);

}

main();

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("                                                     ");
    console.log("               Projeto Desenvolvido por:             ");
    console.log("          Yasmin Guidella - Quimera Criativa         ");
    console.log("            Email: y.guidella8@outlook.com           ");
    console.log("             https://github.com/yguidella/           ");
    console.log("                                                     ");
    console.log("*****************************************************");

}
