import { Banco } from "./models/Banco";
import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";
import { ContaPoupanca } from "./models/ContaPoupanca";

// Exemplo de uso
const banco = new Banco("Banco Exemplo");

const cliente1 = new Cliente("Fulano", "123.456.789-00");
banco.adicionarCliente(cliente1);

const contaCorrente = new ContaCorrente("12345-6", "1234-5", 500, 300);
const contaCorrente2 = new ContaCorrente("12345-6", "1234-5", 500, 1);
//const contaPoupanca = new ContaPoupanca("67890", 2000, 0.5);

const contaPoupanca = new ContaPoupanca("12345-6", "1234-5", 2000, 0.5);
cliente1.adicionarConta(contaCorrente);
cliente1.adicionarConta(contaCorrente2);
//cliente1.adicionarConta(contaPoupanca);

contaCorrente.depositar(200);
contaCorrente.sacar(150);
contaCorrente.usarChequeEspecial(200);

contaPoupanca.aplicarJuros();
contaPoupanca.consultar();

const cliente2 = new Cliente("Ciclano", "989.574.203-23");
banco.adicionarCliente(cliente2);

const contaPoupanca2 = new ContaPoupanca("98765-1", "7341-5", 500, 0.1);
cliente2.adicionarConta(contaPoupanca2);

contaPoupanca.depositar(100);
contaPoupanca.sacar(300);

console.log(JSON.stringify(banco, null, 2));
