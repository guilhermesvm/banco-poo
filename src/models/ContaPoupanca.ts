import { Conta } from "./Conta";
import { Transacao } from "./Transacao";

export class ContaPoupanca extends Conta {
  private _taxaJuros: number;

  constructor(numero: string, agencia: string, saldo: number) {
    super(numero, agencia, saldo);
  }

 // aplicarJuros(): void {
   // const juros = (this.saldo * this._taxaJuros) / 100;
    //this.saldo += juros;
    //this.transacoes.push(new Transacao(juros, new Date()));
 // }

  toJSON() {
    return {
      ...super.toJSON(),
      //taxaJuros: this._taxaJuros,
    };
  }
}
