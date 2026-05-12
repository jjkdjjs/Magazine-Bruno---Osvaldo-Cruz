import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {

    const [carrinho, setCarrinho] = useState([]);

    function adicionarAoCarrinho(produto) {

        const produtoExistente = carrinho.find(
            (item) => item.id === produto.id
        );

        if (produtoExistente) {

            const novoCarrinho = carrinho.map((item) =>
                item.id === produto.id
                    ? {
                        ...item,
                        quantidade: item.quantidade + 1
                    }
                    : item
            );

            setCarrinho(novoCarrinho);

        } else {

            setCarrinho([
                ...carrinho,
                {
                    ...produto,
                    quantidade: 1
                }
            ]);
        }
    }

    function removerDoCarrinho(id) {

        const novoCarrinho = carrinho.filter(
            (item) => item.id !== id
        );

        setCarrinho(novoCarrinho);
    }

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho,
                adicionarAoCarrinho,
                removerDoCarrinho
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}