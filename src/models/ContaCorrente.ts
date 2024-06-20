import { Conta } from "./Conta";
import { Transacao } from "./Transacao";

export class ContaCorrente extends Conta {
  private _limiteChequeEspecial: number;

  constructor(numero: string, agencia: string, saldo: number, limiteChequeEspecial: number) {
    super(numero, agencia,  saldo);
    this._limiteChequeEspecial = limiteChequeEspecial;
  }


  usarChequeEspecial(valor: number): void {
    const saldoAtual: number = this.consultar();

    if (valor <= saldoAtual  + this._limiteChequeEspecial) {
      this.setSaldo = saldoAtual - valor;
      this.adicionarTransacao(new Transacao(-valor, new Date()));
    } 
    else {
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
