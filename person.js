// Objeto person com nome e método sayName
var person = {
    nome: "Enzo",
    sayName: function() {
        console.log(this.nome); // Usando 'this' para acessar a propriedade 'nome' do objeto
    }
};

// Chamando o método sayName para exibir o nome no terminal
person.sayName();