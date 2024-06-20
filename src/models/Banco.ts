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
    this._clientes.push(cliente);
  }

  removerCliente(cliente: Cliente): void {
    this._clientes = this._clientes.filter((c) => c !== cliente);
  }

  toJSON() {
    return {
      id: this._id,
      nome: this._nome,
      clientes: this._clientes,
    };
  }
}
