class Cliente {
  nome: string;
  cpf: string;
  contas: Conta[];

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.contas = [];
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  removerConta(conta: Conta): void {
    this.contas = this.contas.filter((c) => c !== conta);
  }
}
