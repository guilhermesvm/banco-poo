import { ContaPoupanca } from "../models/ContaPoupanca";

describe("Testa as funcionalidades de uma Conta Poupança", () => {
  const numero = "67899-1";
  const agencia = "4321-6";
  const saldo = 2000;
  const taxaJuros = 0.5;

  test("Deve criar uma conta poupança válida", () => {
    const contaPoupanca = new ContaPoupanca(numero, agencia, saldo, taxaJuros);
    expect(contaPoupanca.getNumero).toBe(numero);
    expect(contaPoupanca.getAgencia).toBe(agencia);
    expect(contaPoupanca.getSaldo).toBe(saldo);
  });

  test("Deve aplicar os juros corretamente na conta poupança", () => {
    const contaPoupanca = new ContaPoupanca(numero, agencia, saldo, taxaJuros);
    expect(contaPoupanca.getSaldo).toBe(saldo + (saldo * taxaJuros) / 100);
  });

  test("Não deve definir uma taxa de juros negativa", () => {
    const taxaJuros = -0.5;
    expect(() => new ContaPoupanca(numero, agencia, saldo, taxaJuros)).toThrow(
      "A taxa de juros deve ser um valor não negativo."
    );
  });

  test("Deve retornar o tipo poupança da conta poupança", () => {
    const contaPoupanca = new ContaPoupanca(numero, agencia, saldo, taxaJuros);
    expect(contaPoupanca.getTipo).toBe("Poupança");
  });
});
