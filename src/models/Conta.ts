import { Transacao } from "./Transacao";

export abstract class Conta {
  id: number;
  numero: string;
  saldo: number;
  transacoes: Transacao[];

  constructor(numero: string, saldo: number) {
    this.id = Math.floor(Math.random() * 10000000);
    this.numero = numero;
    this.saldo = saldo;
    this.transacoes = [];
  }

  depositar(valor: number): void {
    this.saldo += valor;
    this.transacoes.push(new Transacao(valor, new Date()));
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push(new Transacao(-valor, new Date()));
    } else {
      throw new Error("Saldo insuficiente.");
    }
  }

  toJSON() {
    return {
      numero: this.numero,
      saldo: this.saldo,
      transacoes: this.transacoes,
    };
  }
}
