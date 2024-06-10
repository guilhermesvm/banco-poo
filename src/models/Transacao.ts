export class Transacao {
  id: number;
  valor: number;
  data: Date;

  constructor(valor: number, data: Date) {
    this.id = Math.floor(Math.random() * 10000000);
    this.valor = valor;
    this.data = data;
  }

  toJSON() {
    return {
      id: this.id,
      valor: this.valor,
      data: this.data,
    };
  }
}
