class ContaCorrente extends Conta {
  limiteChequeEspecial: number;

  constructor(numero: string, saldo: number, limiteChequeEspecial: number) {
    super(numero, saldo);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  usarChequeEspecial(valor: number): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      this.transacoes.push(new Transacao(-valor, new Date()));
    } else {
      throw new Error("Limite de cheque especial excedido.");
    }
  }
}
