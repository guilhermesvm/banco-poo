import { Transacao } from "./Transacao";

export abstract class Conta {
  //private _id: number;
  private _numero: string;
  private _agencia: string;
  private _saldo: number;
  private _transacoes: Transacao[];

  constructor(numero: string, agencia: string, saldo: number) {
    //this._id = Math.floor(Math.random() * 10000000);
    this._numero = this._validarNumero(numero) ? numero : "00000-0";
    this._agencia = this._validarAgencia(agencia) ? agencia : "0000-0";
    this._saldo = saldo;
    this._transacoes = [];
  }
  
  consultar(): number {
    return this.getSaldo;
  }

  set setSaldo(valor: number){
        if(valor >= 0){
          this._saldo = valor;
        }
  }

  get getSaldo(): number{
    return this._saldo;     
  }

  private _validarNumero(numero: string): boolean{
    const regex = /^\d{5}-\d{1}$/;
    if(regex.test(numero)){
      return true;
    }
    return false;
  }

  private _validarAgencia(agencia: string): boolean{
    const regex = /^\d{4}-\d{1}$/;
    if(regex.test(agencia)){
      return true;
    }
    return false;
  }

  depositar(valor: number): void {
    if(valor >= 0){
      this._saldo += valor;
      this._transacoes.push(new Transacao(valor, new Date())); 
    } else{
      throw new Error("Insira um valor válido.");
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

  toJSON() {
    return {
      numero: this._numero,
      agencia: this._agencia,
      saldo: this._saldo,
      transacoes: this._transacoes,
    };
  }
}
