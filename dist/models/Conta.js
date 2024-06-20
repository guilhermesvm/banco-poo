"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const Transacao_1 = require("./Transacao");
class Conta {
    constructor(numero, agencia, saldo) {
        this.setNumero = numero;
        this.setAgencia = agencia;
        this.setSaldo = saldo;
        this._transacoes = [];
    }
    consultar() {
        return this.getSaldo;
    }
    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            this._transacoes.push(new Transacao_1.Transacao(valor, new Date()));
        }
        else {
            throw new Error("Insira um valor válido para depósito.");
        }
    }
    sacar(valor) {
        if (valor <= this._saldo && valor > 0) {
            this._saldo -= valor;
            this._transacoes.push(new Transacao_1.Transacao(-valor, new Date()));
        }
        else {
            throw new Error("Saldo insuficiente.");
        }
    }
    consultarTransacoes() {
        if (this._transacoes.length === 0) {
            throw new Error("Não há transações cadastradas para essa conta.");
        }
        return this._transacoes;
    }
    adicionarTransacao(transacao) {
        if (!transacao) {
            throw new Error("A transação inserida é inválida.");
        }
        this._transacoes.push(transacao);
    }
    removerTransacao(transacao) {
        const index = this._transacoes.indexOf(transacao);
        if (index === -1) {
            throw new Error("A transação não foi encontrada.");
        }
        this._transacoes.splice(index, 1);
    }
    get getNumero() {
        return this._numero;
    }
    set setNumero(numero) {
        if (this._validarNumero(numero)) {
            this._numero = numero;
        }
        else {
            throw new Error("Por favor, insira um número de conta válido.");
        }
    }
    get getAgencia() {
        return this._agencia;
    }
    set setAgencia(agencia) {
        if (this._validarAgencia(agencia)) {
            this._agencia = agencia;
        }
        else {
            throw new Error("Por favor, insira um número de agência válido.");
        }
    }
    get getSaldo() {
        return this._saldo;
    }
    set setSaldo(valor) {
        if (valor >= 0) {
            this._saldo = valor;
        }
    }
    _validarNumero(numero) {
        const regex = /^\d{5}-\d{1}$/;
        return regex.test(numero);
    }
    _validarAgencia(agencia) {
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
exports.Conta = Conta;
