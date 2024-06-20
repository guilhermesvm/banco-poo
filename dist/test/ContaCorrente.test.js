"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaCorrente_1 = require("../models/ContaCorrente");
describe("Testa as funcionalidades de uma Conta Corrente", () => {
    const numero = "12345-6";
    const agencia = "1234-5";
    const saldo = 1000;
    const limite = 500;
    test("Deve criar uma conta corrente válida", () => {
        const contaCorrente = new ContaCorrente_1.ContaCorrente(numero, agencia, saldo, limite);
        expect(contaCorrente.getNumero).toBe(numero);
        expect(contaCorrente.getAgencia).toBe(agencia);
        expect(contaCorrente.getSaldo).toBe(saldo);
        expect(contaCorrente.getLimiteChequeEspecial).toBe(limite);
    });
    test("Deve usar o cheque especial corretamente quando o saldo é insuficiente", () => {
        const contaCorrente = new ContaCorrente_1.ContaCorrente(numero, agencia, saldo, limite);
        contaCorrente.usarChequeEspecial(1500);
        expect(contaCorrente.getSaldo).toBe(1000);
    });
    test("Não deve usar o cheque especial quando o valor excede o limite", () => {
        const contaCorrente = new ContaCorrente_1.ContaCorrente(numero, agencia, saldo, limite);
        expect(() => contaCorrente.usarChequeEspecial(2000)).toThrow("Limite de cheque especial excedido.");
    });
    test("Não deve definir um limite de cheque especial negativo", () => {
        expect(() => new ContaCorrente_1.ContaCorrente("12345-6", "0001-0", 1000, -500)).toThrow("O limite do cheque especial deve ser um valor não negativo.");
    });
});
