import { Banco } from "./models/Banco";
import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";
import { ContaPoupanca } from "./models/ContaPoupanca";

// Exemplo de uso
const banco = new Banco("Banco Exemplo");
const cliente1 = new Cliente("Fulano", "123.456.789-00");

banco.adicionarCliente(cliente1);

const contaCorrente = new ContaCorrente("12345-6", "1234-5", 500, 300);
const contaPoupanca = new ContaPoupanca("12345-6", "1234-5", 2000, 0.5);

cliente1.adicionarConta(contaCorrente);
cliente1.adicionarConta(contaPoupanca);

contaCorrente.depositar(200);
contaCorrente.sacar(150);
contaCorrente.usarChequeEspecial(200);

contaPoupanca.aplicarJuros();
contaPoupanca.consultar();

console.log(JSON.stringify(banco, null, 2));

//Teste Banco
console.log(banco.consultarClientes());
banco.removerCliente(cliente1);

banco.setNome = "";
console.log(banco.getNome);

// //Teste Cliente
// console.log(cliente1.consultarContas());
// cliente1.removerConta(contaCorrente);
// console.log(cliente1.consultarContas());
// console.log(cliente1.getId);
// console.log(cliente1.getCPF);
// console.log(cliente1.getNome);
// cliente1.setNome = "Joaquim"
// console.log(cliente1.getNome);
