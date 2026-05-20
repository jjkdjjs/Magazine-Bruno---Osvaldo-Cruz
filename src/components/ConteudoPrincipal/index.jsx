import styles from './ConteudoPrincipal.module.css';
import Card from '../Card';
import { useCarrinho } from "../../Context/CarrinhoContext";
import produtos from '../../data/produtos';

function ConteudoPrincipal({ produtos: produtosExternos }) {

  const { adicionarAoCarrinho } = useCarrinho();

  const listaProdutos = produtosExternos || produtos;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {listaProdutos.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            title={produto.nome}
            desc={produto.descricao}
            est={produto.em_estoque}
            price={produto.preco}
            img={produto.imagem}
            onComprar={() => adicionarAoCarrinho(produto)}
          />
        ))}
      </div>
    </div>
  );
}

export default ConteudoPrincipal;