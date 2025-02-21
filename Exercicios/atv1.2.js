// AtividadeComCritério1.2: Converte temperatura de Celsius para Fahrenheit

// Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require("prompt-sync");
prompt = prompt();

let celsius = prompt("Qual a temperatura em celsius: "); // Pede a temperatura em Celsius

// Função que converte Celsius para Fahrenheit
function conversao(celsius) {
  const fah = (celsius * 9) / 5 + 32; // Realiza a conversão
  console.log("O valor da conversão é: " + fah); // Exibe o valor convertido para Fahrenheit
}
conversao(celsius); // Chama a função com o parâmetro fornecido
