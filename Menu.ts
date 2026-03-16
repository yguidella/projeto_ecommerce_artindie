import readlinesync = require("readline-sync");
import { ProdutoArte } from "./src/model/ProdutoArte";

export function main(){
    //teste
    let arte1 = new ProdutoArte();

    arte1.numero = 1;
    arte1.nome = "Operários";
    arte1.preco = 7.500;
    arte1.categoria = "Pintura a óleo";
    arte1.artista = "Tarsila do Amaral";

    arte1.visualizar();


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
        console.log("0 - Sair                                             ");
        console.log("*****************************************************");

        opcao = readlinesync.questionInt("\nEntre com a opção desejada ");

        switch(opcao){

            case 1:
                console.log("\nCadastrar Produto");
            break;

            case 2:
                console.log("\nListar os Produtos");
            break;

            case 3:
                console.log("\nBuscar Produto por Número");
            break;

            case 4:
                console.log("\nAtualizar Produtos");
            break;

            case 5:
                console.log("\nApagar Produto");
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
