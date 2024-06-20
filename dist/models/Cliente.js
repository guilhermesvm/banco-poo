"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, cpf) {
        this._id = Math.floor(Math.random() * 10000000);
        this.setNome = nome;
        this.setCPF = cpf;
        this._contas = [];
    }
    consultarContas() {
        if (this._contas.length === 0) {
            throw new Error("Não há contas cadastradas para esse usuário.");
        }
        return this._contas;
    }
    // Implementação do método
    adicionarConta(contaOuContas) {
        if (Array.isArray(contaOuContas)) {
            this._contas.push(...contaOuContas);
        }
        else {
            this._contas.push(contaOuContas);
        }
    }
    // Implementação do método
    removerConta(contaOuContas) {
        if (Array.isArray(contaOuContas)) {
            this._contas = this._contas.filter((c) => !contaOuContas.includes(c));
        }
        else {
            this._contas = this._contas.filter((c) => c !== contaOuContas);
        }
    }
    get getId() {
        return this._id;
    }
    get getNome() {
        return this._nome;
    }
    set setNome(nome) {
        if (this._validaNome(nome)) {
            this._nome = nome;
        }
        else {
            throw new Error("Por favor, insira um nome válido.");
        }
    }
    get getCPF() {
        return this._cpf;
    }
    set setCPF(cpf) {
        if (this._validaCPF(cpf)) {
            this._cpf = cpf;
        }
        else {
            throw new Error("Por favor, insira um número de CPF válido.");
        }
    }
    _validaCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }
    _validaNome(nome) {
        if (!nome || nome.trim() === "") {
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
exports.Cliente = Cliente;
