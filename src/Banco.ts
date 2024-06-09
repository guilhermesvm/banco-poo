import { Cliente } from "./Cliente";

export class Banco {
  nome: string;
  clientes: Cliente[];

  constructor(nome: string) {
    this.nome = nome;
    this.clientes = [];
  }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  removerCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter((c) => c !== cliente);
  }

  toJSON() {
    return {
      nome: this.nome,
      clientes: this.clientes,
    };
  }
}
