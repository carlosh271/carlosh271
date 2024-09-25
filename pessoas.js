// Lista de pessoas com atributos nome, idade e profissão
const pessoas = [
    { nome: 'Ana', idade: 30, profissao: 'Engenheira' },
    { nome: 'Carlos', idade: 25, profissao: 'Designer' },
    { nome: 'Bianca', idade: 28, profissao: 'Desenvolvedora' },
    { nome: 'João', idade: 30, profissao: 'Engenheiro' },
    { nome: 'Maria', idade: 40, profissao: 'Advogada' }
];

// Exibindo as pessoas no terminal
pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`);
});