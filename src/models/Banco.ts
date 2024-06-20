import { Cliente } from "./Cliente";

export class Banco {
  private _id: number;
  private _nome: string;
  private _clientes: Cliente[];

  constructor(nome: string) {
    this._id = Math.floor(Math.random() * 10000000);
    this._nome = nome;
    this._clientes = [];
  }

  consultarClientes() : Cliente[] {
    if(this._clientes.length === 0){
      throw new Error("Não há clientes cadastrados.");
    }
    return this._clientes;
  }

  adicionarCliente(cliente: Cliente): void {
    if(!cliente){
      throw new Error("O cliente inserido é inválido.");
    }
    this._clientes.push(cliente);
  }

  removerCliente(cliente: Cliente): void {
    const index = this._clientes.indexOf(cliente);
    
    if(index === -1){
      throw new Error("O cliente não foi encontrado.");
    }
    this._clientes.splice(index, 1);
  }

  get getId(): number {
    return this._id;
  }

  get getNome(): string {
    return this._nome;
  }

  set setNome(nome: string) {
    if(this._validaNome(nome)){
      this._nome = nome;
    } else {
      throw new Error("Por favor, insira um nome válido.");
    }
  }

  private _validaNome(nome: string): boolean {
    if(!nome || nome.trim() === ""){
      return false;
    }
    return true;
  }

  toJSON() {
    return {
      id: this._id,
      nome: this._nome,
      clientes: this._clientes,
    };
  }
}
