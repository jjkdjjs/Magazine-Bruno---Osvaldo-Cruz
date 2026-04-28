import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.brandSection}>
                    <h2 className={styles.logo}>LojaX</h2>
                    <p className={styles.slogan}>A melhor experiência de compra tecnológica.</p>
                </div>

                <div className={styles.linksSection}>
                    <h4>Navegação</h4>
                    <nav className={styles.footerNav}>
                        <a href="/home">Home</a>
                        <a href="/produtos">Produtos</a>
                        <a href="/sobre">Sobre Nós</a>
                        <a href="/contato">Contato</a>
                    </nav>
                </div>

                <div className={styles.socialSection}>
                    <h4>Siga-nos</h4>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="Facebook">FB</a>
                    </div>
                </div>
            </div>
            
            <div className={styles.copyright}>
                <p>&copy; 2026 LojaX - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}