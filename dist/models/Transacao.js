"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transacao = void 0;
class Transacao {
    constructor(valor, data) {
        this._id = Math.floor(Math.random() * 10000000);
        this._valor = valor;
        this._data = data;
    }
    get getId() {
        return this._id;
    }
    get getValor() {
        return this._valor;
    }
    set setValor(valor) {
        if (valor >= 0) {
            this._valor = valor;
        }
    }
    get getData() {
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
exports.Transacao = Transacao;
