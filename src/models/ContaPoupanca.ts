import { Conta } from "./Conta";
import { Transacao } from "./Transacao";

export class ContaPoupanca extends Conta {
  private _taxaJuros: number;

  constructor(numero: string, agencia:string, saldo: number, taxaJuros: number) {
    super(numero, agencia, saldo);
    this._taxaJuros = taxaJuros;
  }

  aplicarJuros(): void {
    const saldoAtual: number = this.consultar();
    const juros = (saldoAtual * this._taxaJuros) / 100;
    
    this.setSaldo = saldoAtual + juros;
    this.adicionarTransacao(new Transacao(juros, new Date()));
  }

  toJSON() {
    return {
      ...super.toJSON(),
      taxaJuros: this._taxaJuros,
    };
  }
}
