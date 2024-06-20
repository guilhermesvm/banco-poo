import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  private _taxaJuros: number;
  private _tipo: string;

  constructor(
    numero: string,
    agencia: string,
    saldo: number,
    taxaJuros: number
  ) {
    super(numero, agencia, saldo);
    this.setTaxaJuros = taxaJuros;
    this._tipo = "Poupança";
  }

  set setTaxaJuros(taxaJuros: number) {
    if (taxaJuros >= 0) {
      this._taxaJuros = taxaJuros;
    } else {
      throw new Error("A taxa de juros deve ser um valor não negativo.");
    }
  }

  get getTipo(): string {
    return this._tipo;
  }

  toJSON() {
    return {
      tipo: this._tipo,
      taxaJuros: this._taxaJuros,
      ...super.toJSON(),
    };
  }
}
