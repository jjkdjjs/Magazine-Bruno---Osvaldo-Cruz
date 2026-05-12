import "./style.css";
import { useCarrinho } from "../../Context/CarrinhoContext";

function Carrinho() {

    const {
        carrinho,
        removerDoCarrinho
    } = useCarrinho();

    const total = carrinho.reduce(
        (acc, produto) =>
            acc + produto.preco * produto.quantidade,
        0
    );

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

                                    <span>
                                        Quantidade: {produto.quantidade}
                                    </span>

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
                                    onClick={() =>
                                        removerDoCarrinho(produto.id)
                                    }
                                >
                                    Remover
                                </button>

                            </div>
                        ))

                    ) : (

                        <div className="carrinho-vazio">

                            <h2>
                                Seu carrinho está vazio 🛒
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

                    <button className="btn-finalizar">
                        Finalizar Compra
                    </button>

                </div>

            </section>

        </main>
    );
}

export default Carrinho;