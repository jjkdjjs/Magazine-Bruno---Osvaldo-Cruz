import "./style.css";
import ConteudoPrincipal from "../../components/ConteudoPrincipal";
import { useState } from "react";
import { Link } from 'react-router-dom';
import produtos from '../../data/produtos';

function Home() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletter = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <main className="home-page">

            <section className="home-banner">
                <div className="banner-placeholder">
                    <img src="/banner-principal.png" alt="Banner Promocional" className="banner-image" />
                </div>
            </section>

            <section className="home-categories">
                <h2>Categorias Populares</h2>
                <div className="categories-grid">
                    <div className="category-card">
                        <h3>Roupas</h3>
                        <p>Coleção completa de roupas estilosas e confortáveis</p>
                    </div>
                    <div className="category-card">
                        <h3>Calçados</h3>
                        <p>Sapatos e tênis para todos os estilos e ocasiões</p>
                    </div>
                    <div className="category-card">
                        <h3>Acessórios</h3>
                        <p>Complemente seu look com nossos acessórios exclusivos</p>
                    </div>
                </div>
            </section>

            <section className="home-products">
                <h2>Produtos em Destaque</h2>
                <ConteudoPrincipal produtos={produtos.slice(0, 3)} />
                <div className="home-more-button">
                    <Link to="/produtos" className="button-view-more">
                        Ver mais produtos
                    </Link>
                </div>
            </section>

            <section className="home-newsletter">
    <div className="newsletter-content">
        <h2>Receba Nossas Ofertas</h2>
        <p>Inscreva-se e fique por dentro das novidades e promoções exclusivas da LojaX</p>

        <form
            className="newsletter-form"
            action="https://formspree.io/f/myzrjejn"
            method="POST"
        >
            <input
                type="email"
                name="email"
                placeholder="Seu email aqui..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type="submit">
                {subscribed ? "Inscrito!" : "Inscrever"}
            </button>
        </form>
    </div>
</section>
        </main>
    );
}

export default Home;