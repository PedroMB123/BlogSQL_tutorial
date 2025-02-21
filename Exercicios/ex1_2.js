// Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require("prompt-sync");
prompt = prompt();

const n1 = prompt("Digite o primeiro número: ");
console.log(n1);

const n2 = parseFloat(prompt("DIgite número dois: "));
console.log(n2);
