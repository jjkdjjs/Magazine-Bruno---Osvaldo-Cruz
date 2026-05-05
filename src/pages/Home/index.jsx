import "./style.css";
import ConteudoPrincipal from "../../components/ConteudoPrincipal";

function Home() {
    return (
        <main className="home-page">

            <section className="home-banner">
                <div className="banner-placeholder">
                    <img src="/banner-principal.png" alt="Banner Promocional" className="banner-image" />
                </div>
            </section>

            <section className="home-intro">
                <div className="intro-text">
                    <h1>Bem-vindo à nossa loja</h1>
                    <p>Descubra produtos selecionados, ofertas especiais e novidades exclusivas para você.</p>
                </div>
            </section>

            <section className="home-products">
                <h2>Produtos em destaque</h2>
                <ConteudoPrincipal />
            </section>

            <section className="home-promo">
                <div className="promo-card">
                    <h2>Promoção da semana</h2>
                    <p>Aproveite descontos exclusivos e frete grátis em produtos selecionados.</p>
                </div>
            </section>
        </main>
    );
}

export default Home;