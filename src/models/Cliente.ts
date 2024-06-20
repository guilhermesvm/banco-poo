import { Conta } from "./Conta";

export class Cliente {
  private _id: number;
  private _nome: string;
  private _cpf: string;
  private _contas: Conta[];

  constructor(nome: string, cpf: string) {
    this._id = Math.floor(Math.random() * 10000000);
    this.setNome = nome;
    this.setCPF = cpf;
    this._contas = [];
  }

  consultarContas(): Conta[] {
    if(this._contas.length === 0){
      throw new Error("Não há contas cadastradas para esse usuário.");
    }
    return this._contas;
  }

  adicionarConta(conta: Conta): void {
    if(!conta){
      throw new Error("A conta inserida é inválida.");
    }
    this._contas.push(conta);
  }

  removerConta(conta: Conta): void {
    const index = this._contas.indexOf(conta);
    if(index === -1){
      throw new Error("A conta não foi encontrada.");
    }
    this._contas.splice(index, 1);
  }

  get getId(): number {
    return this._id;
  }

  get getNome(): string {
    return this._nome;
  }

  set setNome(nome: string) {
    if(this._validaNome(nome)){
      this._nome = nome;
    } else {
      throw new Error("Por favor, insira um nome válido.");
    }
  }

  get getCPF(): string {
    return this._cpf
  }

  set setCPF(cpf: string) {
    if(this._validaCPF(cpf)){
      this._cpf = cpf;
    } else{
      throw new Error("Por favor, insira um número de CPF válido.");
    }
  }

  private _validaCPF(cpf: string): boolean {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
  }

  private _validaNome(nome: string): boolean {
    if(!nome || nome.trim() === ""){
      return false;
    }
    return true;
  }

  toJSON() {
    return {
      id: this._id,
      nome: this._nome,
      cpf: this._cpf,
      quantidadeContas: this._contas.length,
      contas: this._contas,
    };
  }
}
