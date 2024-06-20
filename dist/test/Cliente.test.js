"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../models/Cliente");
const ContaCorrente_1 = require("../models/ContaCorrente");
describe("Testa as funcionalidades de um Cliente", () => {
    test("Deve criar um cliente com Nome e CPF válidos", () => {
        const nome = "Fulano";
        const cpf = "123.456.789-00";
        const cliente = new Cliente_1.Cliente("Fulano", "123.456.789-00");
        expect(cliente.getNome).toBe(nome);
        expect(cliente.getCPF).toBe(cpf);
    });
    test("Não deve criar um cliente com nome inválido", () => {
        expect(() => new Cliente_1.Cliente("", "123.456.789-00")).toThrow("Por favor, insira um nome válido.");
    });
    test("Não deve criar um cliente com CPF inválido", () => {
        expect(() => new Cliente_1.Cliente("João", "123456780")).toThrow("Por favor, insira um número de CPF válido.");
    });
    test("Deve adicionar uma conta corrente ao cliente", () => {
        const cliente = new Cliente_1.Cliente("João", "123.456.789-00");
        const contaCorrente = new ContaCorrente_1.ContaCorrente("12345-6", "1234-5", 500, 300);
        cliente.adicionarConta(contaCorrente);
        expect(cliente.consultarContas()).toContain(contaCorrente);
    });
    test("Deve remover uma conta corrente do cliente", () => {
        const cliente = new Cliente_1.Cliente("João", "123.456.789-00");
        const contaCorrente = new ContaCorrente_1.ContaCorrente("12345-6", "1234-5", 500, 300);
        cliente.adicionarConta(contaCorrente);
        cliente.removerConta(contaCorrente);
        expect(() => cliente.consultarContas()).toThrow("Não há contas cadastradas para esse usuário.");
    });
});
