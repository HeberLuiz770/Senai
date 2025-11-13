// 
 // ESQUADRÃO 4 - LÓGICA E ASSINCRONISMO
// Integrantes: Heber, Gabrielly, Rayssa, Fernanda
// 
function executarExemplos() {
  const saida = document.getElementById("saida");
  saida.textContent = ""; 

  console.log = (...msg) => {
    saida.textContent += msg.join(" ") + "\n";
  };

  console.log("=== 1. null (Tipo de dado) ===");
  let nome = null;
  if (nome === null) {
    console.log("O nome ainda não foi definido.");
  }
  console.log("\n");

 

  console.log("=== 2. switch (Condicional) ===");
  let cor = "amarelo";
  switch (cor) {
    case "vermelho":
      console.log("Pare!");
      break;
    case "amarelo":
      console.log("Atenção!");
      break;
    case "verde":
      console.log("Siga!");
      break;
    default:
      console.log("Cor inválida!");
  }
  console.log("\n");

 
  
  console.log("=== 3. Parâmetros vs. Argumentos ===");
  function saudacao(nome) {
    console.log("Olá, " + nome + "!");
  }
  saudacao("Rayssa");
  console.log("\n");

  console.log("=== 4. Array.pop() ===");
  let frutas = ["Maçã", "Banana", "Uva"];
  console.log("Antes do pop:", frutas);
  frutas.pop();
  console.log("Depois do pop:", frutas);
  console.log("\n");

  console.log("=== 5. Template Literals ===");
  let idade = 17;
  console.log(`Meu nome é ${"maria"} e eu tenho ${idade} anos.`);
  console.log("\n");


  console.log("=== 6. Array.map() ===");
  let numeros = [1, 2, 3];
  let dobrados = numeros.map(num => num * 2);
  console.log("Números originais:", numeros);
  console.log("Números dobrados:", dobrados);
  console.log("\n");

  console.log("=== 7. querySelectorAll() ===");
  let paragrafos = document.querySelectorAll("p");
  paragrafos.forEach(p => (p.style.color = "lightblue"));
  console.log("Todos os <p> foram pintados de azul!");
  console.log("\n");

  console.log("=== 8. textContent ===");
  let msg = document.getElementById("mensagem");
  msg.textContent = "Olá, JavaScript!";
  console.log("O texto do elemento #mensagem foi alterado!");
  console.log("\n");


  console.log("=== 9. setTimeout() ===");
  console.log("Mensagem inicial...");
  setTimeout(() => {
    console.log("Essa mensagem aparece depois de 2 segundos!");
  }, 2000);
  console.log("Enquanto isso, o código continua...");
  console.log("\n");

  console.log("=== 10. async ===");
  async function carregarDados() {
    console.log("Carregando dados...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Dados carregados com sucesso!");
  }
  carregarDados();
}