import { Banco } from "../models/Banco";
import { Cliente } from "../models/Cliente";

describe("Testa as funcionalidades de um Banco", () => {
    test("Deve criar um banco", () => {
        const nome = "Banco Exemplo";
        const banco = new Banco(nome);
        expect(banco.getNome).toBe(nome);
    });

    test("Não deve criar banco com nome inválido", () => {
        const nome = "";
        expect(() => new Banco(nome)).toThrow("Por favor, insira um nome válido.");
    });

    test("Deve adicionar um cliente ao banco", () => {
        const banco = new Banco("Banco Exemplo");
        const cliente = new Cliente("Fulano", "123.456.789-00");
        
        banco.adicionarCliente(cliente);
            expect(banco.consultarClientes()).toContain(cliente);
      });

      test("Deve remover um cliente do banco", () => {
        const banco = new Banco("Banco Exemplo");
        const cliente = new Cliente("Fulano", "123.456.789-00");
        banco.adicionarCliente(cliente);
        banco.removerCliente(cliente);
        expect(() => banco.consultarClientes()).toThrow("Não há clientes cadastrados.");
      });

      test("Não deve remover um cliente inexistente do banco", () => {
        const banco = new Banco("Banco Exemplo");
        const cliente = new Cliente("Fulano", "123.456.789-00");
        expect(() => banco.removerCliente(cliente)).toThrow("O cliente não foi encontrado.");
      });
    
        
    

    
})