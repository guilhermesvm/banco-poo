import { Banco } from "../models/Banco";

describe("Testa as funcionalidades de um Banco", () => {
    test("Deve criar um banco", () => {
        const banco = new Banco("Banco Exemplo");
        expect(banco.getNome).toBe("Banco Exemplo");
    })
})