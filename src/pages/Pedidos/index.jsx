import { Link } from 'react-router-dom';
import './style.css';
import { useCarrinho } from '../../Context/CarrinhoContext';

function Pedidos() {
    const { pedidos } = useCarrinho();

    const totalPedidos = pedidos.length;
    const entregues = pedidos.filter((pedido) => pedido.status === 'Entregue').length;
    const emAndamento = pedidos.filter((pedido) => pedido.status !== 'Entregue').length;
    const valorTotal = pedidos.reduce((acc, pedido) => acc + pedido.total, 0);

    return (
        <main className="pedidos-page">
            <section className="pedidos-header">
                <div className="pedidos-intro">
                    <p className="eyebrow">Histórico</p>
                    <h1>Seus pedidos</h1>
                    <p>Acompanhe cada compra, o status atual e o valor total investido em sua loja favorita.</p>
                </div>
                <Link to="/produtos" className="pedidos-cta">
                    Continuar comprando
                </Link>
            </section>

            <section className="pedidos-summary">
                <div className="summary-card">
                    <span>Total de pedidos</span>
                    <strong>{totalPedidos}</strong>
                </div>
                <div className="summary-card">
                    <span>Entregues</span>
                    <strong>{entregues}</strong>
                </div>
                <div className="summary-card">
                    <span>Em andamento</span>
                    <strong>{emAndamento}</strong>
                </div>
                <div className="summary-card">
                    <span>Valor gasto</span>
                    <strong>R$ {valorTotal.toFixed(2).replace('.', ',')}</strong>
                </div>
            </section>

            <section className="pedidos-list">
                <div className="pedidos-list-header">
                    <h2>Últimos pedidos</h2>
                    <p>Você possui {totalPedidos} pedido{totalPedidos !== 1 ? 's' : ''} registrado{totalPedidos !== 1 ? 's' : ''}.</p>
                </div>

                {pedidos.length === 0 ? (
                    <div className="pedido-vazio">
                        <h3>Nenhum pedido registrado ainda</h3>
                        <p>Finalize uma compra no carrinho para que ela apareça aqui.</p>
                        <Link to="/carrinho" className="pedido-link">
                            Ir para o carrinho
                        </Link>
                    </div>
                ) : (
                    <div className="pedidos-grid">
                        {pedidos.map((pedido) => (
                            <article className="pedido-card" key={pedido.id}>
                                <div className="pedido-top">
                                    <div>
                                        <p className="pedido-id">{pedido.id}</p>
                                        <h3>{pedido.titulo}</h3>
                                    </div>
                                    <span className={`pedido-status ${pedido.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                        {pedido.status}
                                    </span>
                                </div>

                                <div className="pedido-meta">
                                    <div>
                                        <span>Data</span>
                                        <strong>{pedido.data}</strong>
                                    </div>
                                    <div>
                                        <span>Itens</span>
                                        <strong>{pedido.itens}</strong>
                                    </div>
                                    <div>
                                        <span>Valor</span>
                                        <strong>R$ {pedido.total.toFixed(2).replace('.', ',')}</strong>
                                    </div>
                                </div>

                                <div className="pedido-footer">
                                    <Link to="/produtos" className="pedido-link">
                                        Ver produtos
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Pedidos;
