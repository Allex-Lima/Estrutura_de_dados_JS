class Pilha {
    constructor() {
        this.contador = 0;
        this.obj = {};
    }

    adiciona(elemento) {
        this.obj[this.contador] = elemento;
        this.contador++;
    }

    visualiza() {
        if(this.vazio()) return undefined;

        return this.obj;
    }

    remover() {

        if(this.vazio()) return undefined;

        this.contador--;
        const objRemovido = this.obj[this.contador];
        delete this.obj[this.contador];
        return objRemovido;
    }

    vazio() {
        return this.contador === 0;
    }

    tamanho() {
        return this.contador
    }
}

const p1 = new Pilha();
p1.adiciona("Livro 1");
p1.adiciona("Livro 2");
p1.adiciona("Livro 3");

