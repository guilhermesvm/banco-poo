import { Cliente } from "./Cliente";

export class Banco {
  id: number;
  nome: string;
  clientes: Cliente[];

  constructor(nome: string) {
    this.id = Math.floor(Math.random() * 10000000);
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
      id: this.id,
      nome: this.nome,
      clientes: this.clientes,
    };
  }
}
