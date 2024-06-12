import { Conta } from "./Conta";
import { Transacao } from "./Transacao";

export class ContaCorrente extends Conta {
  private _limiteChequeEspecial: number;

  constructor(numero: string, agencia: string, saldo: number, limiteChequeEspecial: number) {
    super(numero, agencia,  saldo);
    this._limiteChequeEspecial = limiteChequeEspecial;
  }

  usarChequeEspecial(valor: number): void {
    saldo: Number;
    saldo = this.consultar();
    
    if (valor <= this.consultar() + this._limiteChequeEspecial) {
      saldo += valor; 
      this._transacoes.push(new Transacao(-valor, new Date()));
    } else {
      throw new Error("Limite de cheque especial excedido.");
    }
  }

  toJSON() {
    return {
      ...super.toJSON(),
      limiteChequeEspecial: this._limiteChequeEspecial,
    };
  }
}
