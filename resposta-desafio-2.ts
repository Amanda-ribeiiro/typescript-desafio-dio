
enum Trabalho {
    Desenvolvedor,
    Administrador,
    Domestica,
    Pedreiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Matheus',
    idade: 27,
    profissao: Trabalho.Desenvolvedor
};

let pessoa2: Humano = {
    nome: 'Lohan',
    idade: 19,
    profissao: Trabalho.Administrador
};

let pessoa3: Humano = {
    nome: 'Celia',
    idade: 45,
    profissao: Trabalho.Domestica
};

let pessoa4: Humano = {
    nome: "Raimundo",
    idade: 62,
    profissao: Trabalho.Pedreiro
}