// Definindo a classe Retangulo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    // Método para calcular a área
    calcularArea() {
        return this.largura * this.altura;
    }

    // Método para mostrar os detalhes do retângulo
    mostrarDimensoes() {
        console.log(`Largura: ${this.largura}, Altura: ${this.altura}`);
    }
}

// Criando uma instância da classe Retangulo
const meuRetangulo = new Retangulo(10, 5);

// Exibindo as dimensões
meuRetangulo.mostrarDimensoes();

// Calculando e exibindo a área
console.log(`A área do retângulo é: ${meuRetangulo.calcularArea()}`);