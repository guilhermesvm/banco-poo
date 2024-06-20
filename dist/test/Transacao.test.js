"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transacao_1 = require("../models/Transacao");
describe("Testa as funcionalidades de uma Transação", () => {
    test("Deve criar uma transação com valor e data válidos", () => {
        const valor = 100;
        const data = new Date();
        const transacao = new Transacao_1.Transacao(valor, data);
        expect(transacao.getValor).toBe(valor);
        expect(transacao.getData).toBe(data);
    });
    test("Deve definir um novo valor para a transação corretamente", () => {
        const valor = 100;
        const transacao = new Transacao_1.Transacao(valor, new Date());
        const novoValor = 200;
        transacao.setValor = novoValor;
        expect(transacao.getValor).toBe(novoValor);
    });
    test("Deve retornar o ID da transação corretamente", () => {
        const valor = 100;
        const data = new Date();
        const transacao = new Transacao_1.Transacao(valor, data);
        expect(transacao.getId).toBe(transacao.getId);
    });
});
