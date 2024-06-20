"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor(nome) {
        this._id = Math.floor(Math.random() * 10000000);
        this.setNome = nome;
        this._clientes = [];
    }
    consultarClientes() {
        if (this._clientes.length === 0) {
            throw new Error("Não há clientes cadastrados.");
        }
        return this._clientes;
    }
    adicionarCliente(cliente) {
        if (!cliente) {
            throw new Error("O cliente inserido é inválido.");
        }
        this._clientes.push(cliente);
    }
    removerCliente(cliente) {
        const index = this._clientes.indexOf(cliente);
        if (index === -1) {
            throw new Error("O cliente não foi encontrado.");
        }
        this._clientes.splice(index, 1);
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
    _validaNome(nome) {
        if (!nome || nome.trim() === "") {
            return false;
        }
        return true;
    }
    _quantidadeClientes() {
        return this._clientes.length;
    }
    toJSON() {
        return {
            id: this._id,
            nome: this._nome,
            quantidade_clientes: this._quantidadeClientes(),
            clientes: this._clientes,
        };
    }
}
exports.Banco = Banco;
