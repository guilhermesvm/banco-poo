import { Conta } from "./Conta";

export class Cliente {
  id: number;
  nome: string;
  cpf: string;
  contas: Conta[];

  constructor(nome: string, cpf: string) {
    this.id = Math.floor(Math.random() * 10000000);
    this.nome = nome;
    this.cpf = cpf;
    this.contas = [];
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  removerConta(conta: Conta): void {
    this.contas = this.contas.filter((c) => c !== conta);
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      cpf: this.cpf,
      contas: this.contas,
    };
  }
}
