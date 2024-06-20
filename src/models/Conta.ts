import { Transacao } from "./Transacao";

export abstract class Conta {
  private _numero: string;
  private _agencia: string;
  private _saldo: number;
  private _transacoes: Transacao[];

  constructor(numero: string, agencia: string, saldo: number) {
    this.setNumero = numero;
    this.setAgencia = agencia;
    this.setSaldo = saldo;
    this._transacoes = [];
  }
  
  consultar(): number {
    return this.getSaldo;
  }

  depositar(valor: number): void {
    if(valor >= 0){
      this._saldo += valor;
      this._transacoes.push(new Transacao(valor, new Date())); 
    } else{
      throw new Error("Insira um valor válido para depósito.");
    }
  }

  sacar(valor: number): void {
    if (valor <= this._saldo && valor > 0){
      this._saldo -= valor;
      this._transacoes.push(new Transacao(-valor, new Date()));
    } else {
      throw new Error("Saldo insuficiente.");
    }
  }

  consultarTransacoes(): Transacao[] {
    if(this._transacoes.length === 0){
      throw new Error("Não há transações cadastradas para essa conta.");
    }
    return this._transacoes;
  }

  adicionarTransacao(transacao: Transacao): void {
    if(!transacao){
      throw new Error("A transação inserida é inválida.");
    }
    this._transacoes.push(transacao);
  }

  removerTransacao(transacao: Transacao): void {
    const index = this._transacoes.indexOf(transacao);
    if(index === -1){
      throw new Error("A transação não foi encontrada.");
    }
    this._transacoes.splice(index, 1);
  }


  get getNumero(): string {
    return this._numero;
  }

  set setNumero(numero: string) {
    if(this._validarNumero(numero)){
      this._numero = numero;
    } else{
      throw new Error("Por favor, insira um número de conta válido.");
    }
  }

  get getAgencia(): string {
    return this._agencia;
  }

  set setAgencia(agencia: string) {
    if(this._validarAgencia(agencia)){
      this._agencia = agencia;
    } else{
      throw new Error("Por favor, insira um número de agência válido.");
    }
  } 

  get getSaldo(): number {
    return this._saldo;     
  }

  set setSaldo(valor: number) {
    if(valor >= 0){
      this._saldo = valor;
    }
  }


  private _validarNumero(numero: string): boolean{
    const regex = /^\d{5}-\d{1}$/;
    return regex.test(numero);
  }

  private _validarAgencia(agencia: string): boolean{
    const regex = /^\d{4}-\d{1}$/;
    return regex.test(agencia);
  }

  toJSON() {
    return {
      numero: this._numero,
      agencia: this._agencia,
      saldo: this._saldo,
      quantidadeTransacoes: this._transacoes.length,
      transacoes: this._transacoes,
    };
  }
}
