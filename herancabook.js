// Criando um novo objeto book usando herança 
var book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "Olá Mundo",
        writable: true
    }
});

// Exibindo os resultados no terminal
console.log("Objeto book:");
console.log(book);



