// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Solicita ao usuário os dados de vitórias e derrotas
const prompt = require('prompt-sync')(); // Necessita instalar com "npm install prompt-sync"
const vitorias = parseInt(prompt("Digite o número de vitórias: "), 10);
const derrotas = parseInt(prompt("Digite o número de derrotas: "), 10);

// Verifica se as entradas são válidas
if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
    console.log("Entrada inválida. Digite números válidos para vitórias e derrotas.");
} else {
    // Calcula o saldo e o nível
    const { saldoVitorias, nivel } = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível de ${nivel}`);
}
