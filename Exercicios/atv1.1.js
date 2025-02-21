// AtividadeComCritério1.1: Calcula o preço após desconto

// Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require("prompt-sync");
prompt = prompt();

let preco = parseFloat(prompt("Insira o preço do produto: ")); // Pede o preço do produto
let desconto = parseFloat(prompt("Insira o desconto(em porcentagem): ")); // Pede o valor do desconto em porcentagem

// Função que calcula o preço após o desconto
function calcularDesconto(preco, desconto) {
  console.log("O valor após o desconto: "); // Exibe uma mensagem indicando o valor após o desconto
  console.log(preco - (preco * desconto) / 100); // Calcula e exibe o preço com o desconto aplicado
}
calcularDesconto(preco, desconto); // Chama a função com os parâmetros
