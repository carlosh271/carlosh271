// Classe base Venda
class Venda {
    constructor(valorUnitario, produtosVendidos) {
        this.valorUnitario = valorUnitario || 0;
        this.produtosVendidos = produtosVendidos || 0;
    }

    // Método polimórfico
    CalcularVendas() {
        return this.valorUnitario * this.produtosVendidos;
    }
}

// Classe derivada VendaDesconto, que herda de Venda
class VendaDesconto extends Venda {
    constructor(valorUnitario, produtosVendidos, desconto) {
        super(valorUnitario, produtosVendidos); 
        this.desconto = desconto || 0;
    }

    // Sobrescreve o método para incluir desconto
    CalcularVendas() {
        const totalSemDesconto = super.CalcularVendas();
        const totalComDesconto = totalSemDesconto - (totalSemDesconto * this.desconto);
        return totalComDesconto;
    }
}

// Classe derivada VendaImposto, que herda de Venda
class VendaImposto extends Venda {
    constructor(valorUnitario, produtosVendidos, taxaImposto) {
        super(valorUnitario, produtosVendidos); 
        this.taxaImposto = taxaImposto || 0;
    }

    // Sobrescreve o método para incluir imposto
    CalcularVendas() {
        const totalSemImposto = super.CalcularVendas();
        const totalComImposto = totalSemImposto + (totalSemImposto * this.taxaImposto);
        return totalComImposto;
    }
}

// Exemplo de uso

// Venda normal sem desconto nem imposto
const vendaNormal = new Venda(100, 5); // valorUnitario = 100, produtosVendidos = 5
console.log('Venda normal:', vendaNormal.CalcularVendas());

// Venda com desconto de 10% (0.10)
const vendaComDesconto = new VendaDesconto(100, 5, 0.10); // valorUnitario = 100, produtosVendidos = 5, desconto = 10%
console.log('Venda com desconto:', vendaComDesconto.CalcularVendas());

// Venda com imposto de 15% (0.15)
const vendaComImposto = new VendaImposto(100, 5, 0.15); // valorUnitario = 100, produtosVendidos = 5, taxaImposto = 15%
console.log('Venda com imposto:', vendaComImposto.CalcularVendas());