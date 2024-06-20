"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = require("./Conta");
const Transacao_1 = require("./Transacao");
class ContaPoupanca extends Conta_1.Conta {
    constructor(numero, agencia, saldo, taxaJuros) {
        super(numero, agencia, saldo);
        this.setTaxaJuros = taxaJuros;
        this._tipo = "Poupança";
    }
    aplicarJuros() {
        let saldoAtual = this.consultar();
        const juros = (saldoAtual * this._taxaJuros) / 100;
        saldoAtual += juros;
        this.setSaldo = saldoAtual;
        this.adicionarTransacao(new Transacao_1.Transacao(-juros, new Date()));
    }
    get getTaxaJuros() {
        return this._taxaJuros;
    }
    set setTaxaJuros(taxaJuros) {
        if (taxaJuros >= 0) {
            this._taxaJuros = taxaJuros;
        }
        else {
            throw new Error("A taxa de juros deve ser um valor não negativo.");
        }
    }
    get getTipo() {
        return this._tipo;
    }
    toJSON() {
        return Object.assign({ tipo: this._tipo, taxaJuros: this._taxaJuros }, super.toJSON());
    }
}
exports.ContaPoupanca = ContaPoupanca;
