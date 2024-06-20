import { Conta } from "./Conta";
import { Transacao } from "./Transacao";

export class ContaCorrente extends Conta {
  private _limiteChequeEspecial: number;
  private _tipo: string;

  constructor(
    numero: string,
    agencia: string,
    saldo: number,
    limiteChequeEspecial: number
  ) {
    super(numero, agencia, saldo);
    this.setLimiteChequeEspecial = limiteChequeEspecial;
    this._tipo = "Corrente";
  }

  usarChequeEspecial(valor: number): void {
    const saldoAtual: number = this.consultar();

    if (valor <= saldoAtual + this._limiteChequeEspecial) {
      this.setSaldo = saldoAtual - valor;
      this.adicionarTransacao(new Transacao(-valor, new Date()));
    } else {
      throw new Error("Limite de cheque especial excedido.");
    }
  }

  get getTipo(): string {
    return this._tipo;
  }

  get getLimiteChequeEspecial(): number {
    return this._limiteChequeEspecial;
  }

  set setLimiteChequeEspecial(limite: number) {
    if (limite >= 0) {
      this._limiteChequeEspecial = limite;
    } else {
      throw new Error(
        "O limite do cheque especial deve ser um valor não negativo."
      );
    }
  }

  toJSON() {
    return {
      tipo: this._tipo,
      limiteChequeEspecial: this._limiteChequeEspecial,
      ...super.toJSON(),
    };
  }
}
