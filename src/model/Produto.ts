export abstract class Produto{

    private  _numero!: number;
    private _nome!: string;
    private _preco!: number;
    private _categoria!: string;

    constructor(){

    }

    public get numero(): number{
        return this._numero;
    }
    public set numero(valor: number){
        this._numero = valor;
    }
    public get nome(): string{
        return this._nome;
    }
    public set nome(valor: string){
        this._nome = valor;
    }
     public get preco(): number{
        return this._preco;
    }
    public set preco(valor: number){
        this._preco = valor;
    }
    public get categoria(): string{
        return this._categoria;
    }
    public set categoria(valor: string){
        this._categoria = valor;
    }

    public visualizar(): void{
        console.log("\nDados da Arte: ");
        console.log(`Número da Arte: ${this._numero}`);
        console.log(`Nome da Arte: ${this._nome}`);
        console.log(`Preço da Arte: ${this._preco}`);
        console.log(`Categoria da Arte: ${this._categoria}`);

    }

}