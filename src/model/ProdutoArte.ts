import { Produto } from "./Produto";

export class ProdutoArte extends Produto{

    private _artista!:string;
    
    constructor(){
        super();
    }

    public get artista(): string{
        return this._artista;
    }
    public set artista(valor: string){
        this._artista = valor;
    }

    public visualizar(): void{
        super.visualizar();
        console.log(`Artista: ${this._artista}`);
    }


}