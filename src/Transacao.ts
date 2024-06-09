export class Transacao {
  valor: number;
  data: Date;

  constructor(valor: number, data: Date) {
    this.valor = valor;
    this.data = data;
  }

  toJSON() {
    return {
      valor: this.valor,
      data: this.data,
    };
  }
}
