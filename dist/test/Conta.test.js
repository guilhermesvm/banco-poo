"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaCorrente_1 = require("../models/ContaCorrente");
const ContaPoupanca_1 = require("../models/ContaPoupanca");
const numero = "67899-1";
const agencia = "4321-6";
const saldo = 1000;
describe("Teste as funcionalidades de uma Conta em uma Conta Corrente", () => {
    const limite = 500;
    test("Deve depositar um valor na conta corretamente", () => {
        const contaCorrente = new ContaCorrente_1.ContaCorrente(numero, agencia, saldo, limite);
        contaCorrente.depositar(500);
        expect(contaCorrente.getSaldo).toBe(1500);
    });
    test("Não deve depositar um valor negativo na conta", () => {
        const contaCorrente = new ContaCorrente_1.ContaCorrente(numero, agencia, saldo, limite);
        expect(() => contaCorrente.depositar(-500)).toThrow("Insira um valor válido para depósito.");
    });
    test("Deve sacar um valor da conta corretamente", () => {
        const contaCorrente = new ContaCorrente_1.ContaCorrente(numero, agencia, saldo, limite);
        ;
        contaCorrente.sacar(500);
        expect(contaCorrente.getSaldo).toBe(500);
    });
    test("Não deve sacar um valor maior do que o saldo disponível", () => {
        const contaCorrente = new ContaCorrente_1.ContaCorrente(numero, agencia, saldo, limite);
        ;
        expect(() => contaCorrente.sacar(1500)).toThrow("Saldo insuficiente.");
    });
});
describe("Teste as funcionalidades de uma Conta em uma Conta Poupança", () => {
    const taxaJuros = 0.5;
    test("Deve depositar um valor na conta corretamente", () => {
        const contaPoupanca = new ContaPoupanca_1.ContaPoupanca(numero, agencia, saldo, taxaJuros);
        contaPoupanca.depositar(500);
        expect(contaPoupanca.getSaldo).toBe(1500);
    });
    test("Não deve depositar um valor negativo na conta", () => {
        const contaPoupanca = new ContaPoupanca_1.ContaPoupanca(numero, agencia, saldo, taxaJuros);
        expect(() => contaPoupanca.depositar(-500)).toThrow("Insira um valor válido para depósito.");
    });
    test("Deve sacar um valor da conta corretamente", () => {
        const contaPoupanca = new ContaPoupanca_1.ContaPoupanca(numero, agencia, saldo, taxaJuros);
        contaPoupanca.sacar(500);
        expect(contaPoupanca.getSaldo).toBe(500);
    });
    test("Não deve sacar um valor maior do que o saldo disponível", () => {
        const contaPoupanca = new ContaPoupanca_1.ContaPoupanca(numero, agencia, saldo, taxaJuros);
        expect(() => contaPoupanca.sacar(1500)).toThrow("Saldo insuficiente.");
    });
});
