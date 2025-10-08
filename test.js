const saudacao = require('./hello');

// Teste com erro intencional
const resultado = saudacao("Mundo");
const esperado = "Olá, Mundo!"; // ✅ Corrigido

if (resultado !== esperado) {
  console.error(`❌ FALHA: esperado "${esperado}", mas recebeu "${resultado}"`);
  process.exit(1); // Faz o CI falhar
}

console.log("✅ Todos os testes passaram!");
