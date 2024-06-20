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

  // Assinaturas de sobrecarga
  adicionarCliente(cliente: Cliente): void;
  adicionarCliente(clientes: Cliente[]): void;

  // Implementação do método
  adicionarCliente(clienteOuClientes: Cliente | Cliente[]): void {
    if (Array.isArray(clienteOuClientes)) {
      this._clientes.push(...clienteOuClientes);
    } else {
      this._clientes.push(clienteOuClientes);
    }
  }

  removerCliente(cliente: Cliente): void;
  removerCliente(clientes: Cliente[]): void;

  removerCliente(clienteOuClientes: Cliente | Cliente[]): void {
    if (Array.isArray(clienteOuClientes)) {
      this._clientes = this._clientes.filter(
        (c) => !clienteOuClientes.includes(c)
      );
    } else {
      this._clientes = this._clientes.filter((c) => c !== clienteOuClientes);
    }
  }

  toJSON() {
    return {
      id: this._id,
      nome: this._nome,
      clientes: this._clientes,
    };
  }
}
