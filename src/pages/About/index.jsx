import "./style.css";

function About() {
    return (
        <main className="about-page">
            <section className="about-header">
                <div className="about-header-content">
                    <h1>Sobre a LojaX</h1>
                    <p>Sua destination de moda e estilo</p>
                </div>
            </section>

            <section className="about-content">
                <div className="about-container">
                    <div className="about-text">
                        <h2>Quem Somos</h2>
                        <p>A LojaX é mais que uma loja de roupas e acessórios. Somos um movimento de moda que acredita que o estilo pessoal é uma forma de expressão. Desde 2020, trabalhamos para trazer as melhores peças do mercado direto para você.</p>
                        <p>Nossa missão é tornar a moda acessível, oferecendo qualidade premium com preços justos. Cada produto em nosso catálogo é cuidadosamente selecionado para garantir satisfação total.</p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <h3>+5.000</h3>
                            <p>Clientes Satisfeitos</p>
                        </div>
                        <div className="stat-card">
                            <h3>+500</h3>
                            <p>Produtos Únicos</p>
                        </div>
                        <div className="stat-card">
                            <h3>+200</h3>
                            <p>Marcas Parceiras</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-values">
                <h2>Nossos Valores</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>🎨 Qualidade</h3>
                        <p>Só oferecemos produtos que atendem aos nossos altos padrões de qualidade e durabilidade.</p>
                    </div>
                    <div className="value-card">
                        <h3>💚 Sustentabilidade</h3>
                        <p>Trabalhamos com marcas que compartilham nosso compromisso com práticas sustentáveis.</p>
                    </div>
                    <div className="value-card">
                        <h3>🤝 Transparência</h3>
                        <p>Cremos em relacionamentos honestos com nossos clientes e parceiros de negócio.</p>
                    </div>
                    <div className="value-card">
                        <h3>🚀 Inovação</h3>
                        <p>Estamos sempre buscando novas tendências e formas de melhorar sua experiência.</p>
                    </div>
                </div>
            </section>

            <section className="about-team">
                <h2>Por Que Escolher LojaX</h2>
                <div className="benefits">
                    <div className="benefit">
                        <h3>✓ Frete Grátis</h3>
                        <p>Em compras acima de R$ 150</p>
                    </div>
                    <div className="benefit">
                        <h3>✓ Trocas Garantidas</h3>
                        <p>30 dias de garantia em qualquer compra</p>
                    </div>
                    <div className="benefit">
                        <h3>✓ Atendimento 24/7</h3>
                        <p>Suporte sempre disponível para você</p>
                    </div>
                    <div className="benefit">
                        <h3>✓ Segurança</h3>
                        <p>Pagamento 100% seguro e protegido</p>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <h2>Pronto para Descobrir Seu Estilo?</h2>
                <p>Explore nossa coleção exclusiva e encontre tudo o que você sempre procurou.</p>
                <a href="/produtos" className="cta-button">Ir para Produtos →</a>
            </section>
        </main>
    );
}

export default About;
