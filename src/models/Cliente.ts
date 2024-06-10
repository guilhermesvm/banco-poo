import { Conta } from "./Conta";

export class Cliente {
  private _id: number;
  private _nome: string;
  private _cpf: string;
  private _contas: Conta[];

  constructor(nome: string, cpf: string) {
    this._id = Math.floor(Math.random() * 10000000);
    this._nome = nome;
    this._cpf = cpf;
    this._contas = [];
  }

  adicionarConta(conta: Conta): void {
    this._contas.push(conta);
  }

  removerConta(conta: Conta): void {
    this._contas = this._contas.filter((c) => c !== conta);
  }

  toJSON() {
    return {
      id: this._id,
      nome: this._nome,
      cpf: this._cpf,
      contas: this._contas,
    };
  }
}
