import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return <>
        <header className={styles.header}>
            <div className={styles.headerTitle}>
                <h2>LojaX</h2>
            </div>
            <div className={styles.headerBox}>
                <nav className={styles.headerNav}>
                    <Link className={styles.headerLink} to="/">Home</Link>
                    <Link className={styles.headerLink} to="/produtos">Produtos</Link>
                    <Link className={styles.headerLink} to="/pedidos">Pedidos</Link>
                    <Link className={styles.headerLink} to="/carrinho">Carrinho</Link>
                </nav>
            </div>
        </header>
    </>
}
