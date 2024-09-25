// Classe base Mortal
class Mortal {
    morrer() {
        console.log("O mortal morreu.");
    }
}

// Classe derivada Humano
class Humano extends Mortal {
    morrer() {
        console.log("O humano morreu de causas naturais.");
    }
}

// Classe derivada Vampiro
class Vampiro extends Mortal {
    morrer() {
        console.log("O vampiro foi derrotado com uma estaca no coração.");
    }
}

// Função Matar que aceita qualquer objeto Mortal
function matar(m) {
    m.morrer(); // Ligação dinâmica acontece aqui
}

// Criando instâncias
const humano = new Humano();
const vampiro = new Vampiro();

// Executando a função matar com objetos diferentes
matar(humano);  // Saída: O humano morreu de causas naturais.
matar(vampiro); // Saída: O vampiro foi derrotado com uma estaca no coração.