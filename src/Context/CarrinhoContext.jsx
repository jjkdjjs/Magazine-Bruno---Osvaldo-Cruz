import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {

    const [carrinho, setCarrinho] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    function adicionarAoCarrinho(produto) {
        setCarrinho((prev) => {
            const produtoExistente = prev.find((item) => item.id === produto.id);

            if (produtoExistente) {
                return prev.map((item) =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...produto,
                    quantidade: 1
                }
            ];
        });
    }

    function diminuirQuantidade(id) {
        setCarrinho((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter((item) => item.quantidade > 0)
        );
    }

    function removerDoCarrinho(id) {
        setCarrinho((prev) => prev.filter((item) => item.id !== id));
    }

    function limparCarrinho() {
        setCarrinho([]);
    }

    function finalizarPedido(produtos, valorTotal) {
        const dataAtual = new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(new Date());

        const quantidadeItens = produtos.reduce((acc, produto) => acc + produto.quantidade, 0);
        const tituloPedido = produtos.length > 1
            ? `${produtos[0].nome} +${produtos.length - 1}`
            : produtos[0]?.nome || 'Pedido';

        const novoPedido = {
            id: `#${Date.now().toString().slice(-4)}`,
            titulo: tituloPedido,
            data: dataAtual,
            status: 'Processando',
            itens: quantidadeItens,
            total: valorTotal,
            produtos
        };

        setPedidos((prev) => [novoPedido, ...prev]);
    }

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho,
                pedidos,
                adicionarAoCarrinho,
                diminuirQuantidade,
                removerDoCarrinho,
                limparCarrinho,
                finalizarPedido
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}