import { Conta } from "./Conta";
import { Transacao } from "./Transacao";

export class ContaPoupanca extends Conta {
  taxaJuros: number;

  constructor(numero: string, saldo: number, taxaJuros: number) {
    super(numero, saldo);
    this.taxaJuros = taxaJuros;
  }

  aplicarJuros(): void {
    const juros = (this.saldo * this.taxaJuros) / 100;
    this.saldo += juros;
    this.transacoes.push(new Transacao(juros, new Date()));
  }
}
