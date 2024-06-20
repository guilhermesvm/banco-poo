"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
const Transacao_1 = require("./Transacao");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, agencia, saldo, limiteChequeEspecial) {
        super(numero, agencia, saldo);
        this.setLimiteChequeEspecial = limiteChequeEspecial;
        this._tipo = "Corrente";
    }
    usarChequeEspecial(valor) {
        const saldoAtual = this.consultar();
        if (valor <= saldoAtual + this._limiteChequeEspecial) {
            this.setSaldo = saldoAtual - valor;
            this.adicionarTransacao(new Transacao_1.Transacao(-valor, new Date()));
        }
        else {
            throw new Error("Limite de cheque especial excedido.");
        }
    }
    get getTipo() {
        return this._tipo;
    }
    get getLimiteChequeEspecial() {
        return this._limiteChequeEspecial;
    }
    set setLimiteChequeEspecial(limite) {
        if (limite >= 0) {
            this._limiteChequeEspecial = limite;
        }
        else {
            throw new Error("O limite do cheque especial deve ser um valor não negativo.");
        }
    }
    toJSON() {
        return Object.assign({ tipo: this._tipo, limiteChequeEspecial: this._limiteChequeEspecial }, super.toJSON());
    }
}
exports.ContaCorrente = ContaCorrente;
