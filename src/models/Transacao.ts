export class Transacao {
  private _id: number;
  private _valor: number;
  private _data: Date;

  constructor(valor: number, data: Date) {
    this._id = Math.floor(Math.random() * 10000000);
    this._valor = valor;
    this._data = data;
  }

  get getId(): number {
    return this._id;
  }

  get getValor(): number {
    return this._valor;
  }

  get getData(): Date{
    return this._data;
  }


  toJSON() {
    return {
      id: this._id,
      valor: this._valor,
      data: this._data,
    };
  }
}
