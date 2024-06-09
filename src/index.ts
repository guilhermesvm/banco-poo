import { Banco } from "./Banco";
import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

// Exemplo de uso
const banco = new Banco("Banco Exemplo");
const cliente1 = new Cliente("Fulano", "123.456.789-00");
const contaCorrente = new ContaCorrente("12345", 1000, 500);
const contaPoupanca = new ContaPoupanca("67890", 2000, 0.5);

cliente1.adicionarConta(contaCorrente);
cliente1.adicionarConta(contaPoupanca);
banco.adicionarCliente(cliente1);

contaCorrente.depositar(200);
contaCorrente.sacar(150);
contaCorrente.usarChequeEspecial(200);

contaPoupanca.aplicarJuros();

console.log(JSON.stringify(banco, null, 2));
