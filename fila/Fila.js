export class FilaCliente {
    constructor() {
        this.fila = [];
    }

    adicionar(nome) {
        this.fila.push(nome);
    }

    remover() {
        this.fila.shift();
    }

    visualizar() {
        return this.fila;
    }

    filaVazia() {
        this.fila.length === 0;
    }

    tamanhoFila() {
        return this.fila.length;
    }

}

const fila = new FilaCliente();

fila.adicionar("Alex");
fila.adicionar("Axel");
fila.adicionar("Bia");
fila.adicionar("Barbara");

console.log(fila.visualizar());
console.log(fila.tamanhoFila());

fila.remover();
console.log(fila.visualizar());
console.log(fila.tamanhoFila());

console.log(fila);