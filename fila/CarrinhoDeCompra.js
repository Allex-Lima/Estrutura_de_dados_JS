class CarrinhoDeCompras {
    produtos = [];

    constructor() {
        this.nome;
        this.preco;
        this.quantidade;
    }

    adicionar(nome, preco, quantidade) {
        const total = (preco * quantidade);

        for (let prod of this.produtos) {
            if (prod.nome === nome) {
                prod.quantidade += quantidade;
                prod.total = (prod.preco * prod.quantidade);
                return;
            }
        }

        this.produtos.push({
            nome,
            preco,
            quantidade,
            total,
        });
    }

    visualizar() {
        if (this.carrinhoDeComprasVazio()) {
            return "Carrinho vazio, não podemos remover item.";
        }
        return [...this.produtos];
    }

    remover(item, quantidadeRemovida) {
        if (this.carrinhoDeComprasVazio()) {
            return [];
        }
        
        for (let prod of this.produtos) {
            
            if (prod["nome"] === item) {
                if (quantidadeRemovida > prod.quantidade) {
                    return false;
                }

                prod.quantidade -= quantidadeRemovida;
                prod.total = (prod.preco * prod.quantidade);

                if (prod["quantidade"] === 0) {
                    this.produtos.splice(this.produtos.indexOf(prod), 1);
                }
                return true;
            }
        }
    }

    quantidadeDeItemNoCarrinho() {
        return this.produtos.length;
    }


    carrinhoDeComprasVazio() {
        return this.produtos.length === 0;
    }
}

const p1 = new CarrinhoDeCompras();
// adicionar
p1.adicionar("cuecas", 20.50, 4);

p1.adicionar("meias", 10.0, 3);
p1.adicionar("blusas", 70.0, 4);
p1.adicionar("cuecas", 20.50, 2)
p1.adicionar("meias", 10.0, 4);
p1.adicionar("blusas", 70.0, 2);
p1.adicionar("calça", 150.0, 4);

p1.adicionar("cuecas", 20.50, 3)

// remover
// p1.remover("cuecas", 2);
// p1.remover("meias", 7);
// p1.remover("blusas", 6)

console.log(p1.visualizar());




