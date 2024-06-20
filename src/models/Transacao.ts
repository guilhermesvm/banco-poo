export class Transacao {
  private _id: number;
  private _juroAplicado: number;
  private _data: Date;

  constructor(valor: number, data: Date) {
    this._id = Math.floor(Math.random() * 10000000);
    this._juroAplicado = valor;
    this._data = data;
  }

  toJSON() {
    return {
      id: this._id,
      juroAplicado: this._juroAplicado,
      data: this._data,
    };
  }
}
