import "./style.css";
import { useCarrinho } from "../../Context/CarrinhoContext";
import { useNavigate } from 'react-router-dom';

function Carrinho() {
    const navigate = useNavigate();

    const {
        carrinho,
        adicionarAoCarrinho,
        diminuirQuantidade,
        removerDoCarrinho,
        limparCarrinho,
        finalizarPedido
    } = useCarrinho();

    function handleRemoverProduto(produto) {
        if (produto.quantidade > 1) {
            diminuirQuantidade(produto.id);
            return;
        }

        removerDoCarrinho(produto.id);
    }

    const total = carrinho.reduce(
        (acc, produto) =>
            acc + produto.preco * produto.quantidade,
        0
    );

    function finalizarCompra() {
        if (carrinho.length === 0) {
            window.alert('Seu carrinho está vazio. Adicione um produto antes de finalizar.');
            return;
        }

        finalizarPedido(carrinho, total);
        limparCarrinho();
        navigate('/finalizado');
    }

    return (
        <main className="carrinho-page">

            <section className="carrinho-header">
                <h1>Seu Carrinho</h1>

                <p>
                    Confira seus produtos antes de finalizar a compra
                </p>
            </section>

            <section className="carrinho-content">

                <div className="carrinho-produtos">

                    {carrinho.length > 0 ? (

                        carrinho.map((produto) => (

                            <div
                                className="produto-carrinho"
                                key={produto.id}
                            >

                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    className="produto-imagem"
                                />

                                <div className="produto-info">

                                    <h2>{produto.nome}</h2>

                                    <p>
                                        R$ {produto.preco.toFixed(2)}
                                    </p>

                                </div>

                                <div className="quantidade-container">

                                    <button
                                        type="button"
                                        className="btn-quantity"
                                        onClick={() => diminuirQuantidade(produto.id)}
                                        aria-label={`Remover uma unidade de ${produto.nome}`}
                                    >
                                        -
                                    </button>

                                    <span>
                                        Quantidade: {produto.quantidade}
                                    </span>

                                    <button
                                        type="button"
                                        className="btn-quantity"
                                        onClick={() => adicionarAoCarrinho(produto)}
                                        aria-label={`Adicionar uma unidade de ${produto.nome}`}
                                    >
                                        +
                                    </button>

                                </div>

                                <div className="subtotal">

                                    <p>
                                        R$ {
                                            (
                                                produto.preco *
                                                produto.quantidade
                                            ).toFixed(2)
                                        }
                                    </p>

                                </div>

                                <button
                                    className="btn-remover"
                                    onClick={() => handleRemoverProduto(produto)}
                                >
                                    Remover
                                </button>

                            </div>
                        ))

                    ) : (

                        <div className="carrinho-vazio">

                            <h2>
                                Seu carrinho está vazio 
                            </h2>

                        </div>
                    )}

                </div>

                <div className="resumo-compra">

                    <h2>Resumo</h2>

                    <div className="resumo-item">

                        <span>Total:</span>

                        <strong>
                            R$ {total.toFixed(2)}
                        </strong>

                    </div>

                    <button className="btn-finalizar" onClick={finalizarCompra}>
                        Finalizar Compra
                    </button>

                </div>

            </section>

        </main>
    );
}

export default Carrinho;