import { Link } from 'react-router-dom';
import './style.css';

function Finalizado() {
    return (
        <main className="finalizado-page">
            <div className="finalizado-card">
                <h1>Compra finalizada com sucesso!</h1>
                <p>Obrigado pela sua compra. Seu pedido foi registrado e seu carrinho foi esvaziado.</p>
                <Link to="/produtos" className="btn-voltar">
                    Continuar comprando
                </Link>
            </div>
        </main>
    );
}

export default Finalizado;
