import { Conta } from "./Conta";

export class Cliente {
  nome: string;
  cpf: string;
  contas: Conta[];

  constructor(nome: string, cpf: string) {
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
      nome: this.nome,
      cpf: this.cpf,
      contas: this.contas,
    };
  }
}
