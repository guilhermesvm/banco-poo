import { Transacao } from "./Transacao";

export abstract class Conta {
  private _id: number;
  private _numero: string;
  private _saldo: number;
  private _transacoes: Transacao[];

  constructor(numero: string, saldo: number) {
    this._id = Math.floor(Math.random() * 10000000);
    this._numero = numero;
    this._saldo = saldo;
    this._transacoes = [];
  }

  depositar(valor: number): void {
    this._saldo += valor;
    this._transacoes.push(new Transacao(valor, new Date()));
  }

  sacar(valor: number): void {
    if (valor <= this._saldo) {
      this._saldo -= valor;
      this._transacoes.push(new Transacao(-valor, new Date()));
    } else {
      throw new Error("Saldo insuficiente.");
    }
  }

  toJSON() {
    return {
      id: this._id,
      numero: this._numero,
      saldo: this._saldo,
      transacoes: this._transacoes,
    };
  }
}
