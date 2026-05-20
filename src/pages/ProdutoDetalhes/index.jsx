import { Link, useParams } from 'react-router-dom';
import produtos from '../../data/produtos';
import './style.css';

function ProdutoDetalhes() {
  const { id } = useParams();
  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <main className="produto-detalhes-page">
        <div className="produto-detalhes-fallback">
          <h2>Produto não encontrado</h2>
          <Link to="/produtos" className="back-button">
            Voltar para produtos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="produto-detalhes-page">
      <div className="produto-detalhes-card">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="produto-image"
        />

        <div className="produto-info">
          <h1>{produto.nome}</h1>
          <p className="categoria">Categoria: {produto.categoria}</p>
          <p className="descricao">{produto.descricao}</p>
          <p className="preco">R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
          <span className={`estoque ${produto.em_estoque ? 'in-stock' : 'out-stock'}`}>
            {produto.em_estoque ? 'Disponível em estoque' : 'Indisponível no momento'}
          </span>

          <div className="acoes">
            <Link to="/produtos" className="back-button">
              Voltar à lista de produtos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProdutoDetalhes;
