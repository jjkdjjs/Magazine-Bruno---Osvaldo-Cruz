import { useState } from "react";
import "./style.css";
import ConteudoPrincipal from "../../components/ConteudoPrincipal";

function Produtos() {
    const [categoriaFilter, setCategoriaFilter] = useState("");
    const [precoFilter, setPrecoFilter] = useState("");
    const [ordenacao, setOrdenacao] = useState("nome");

    const produtos = [
        {
      id: 1,
      nome: 'Camisa de Cerveja ',
      descricao: 'Camisa de algodão',
      em_estoque: true,
      preco: 49.9,
      categoria: 'roupas',
      imagem:
        'https://i.pinimg.com/736x/fa/02/4a/fa024a2d05dacef4e4cd25da3d68035e.jpg',
    },
    {
      id: 2,
      nome: 'Calça Usada Viva',
      descricao: 'Calça jeans',
      em_estoque: true,
      preco: 99.9,
      categoria: 'roupas',
      imagem:
        'https://i.pinimg.com/736x/93/af/e9/93afe9be8930bc301eb773999a0e879c.jpg',
    },
    {
      id: 3,
      nome: 'Tênis Lacoste (original)',
      descricao: 'Tênis esportivo',
      em_estoque: false,
      preco: 149.9,
      categoria: 'calcados',
      imagem:
        'https://i.pinimg.com/1200x/46/00/e7/4600e792ceae955c18b7a90db1980678.jpg',
    },
    {
      id: 4,
      nome: 'Camisa Macakito',
      descricao: 'Camisa confortável e estilosa',
      em_estoque: true,
      preco: 59.9,
      categoria: 'roupas',
      imagem:
        'https://i.pinimg.com/1200x/d3/e3/2f/d3e32ffd8917b09364e1f4814d708171.jpg',
    },
    {
      id: 5,
      nome: 'BiquiPUTIN',
      descricao: 'Biquíni de alta qualidade',
      em_estoque: true,
      preco: 39.9,
      categoria: 'roupas',
      imagem:
        'https://i.pinimg.com/1200x/d9/e1/90/d9e19080ede42a82c78d7f2bb9f2df46.jpg',
    },
    {
      id: 6,
      nome: 'Camisa do 3Tupac',
      descricao: 'Camisa de algodão com estampa do Tupac',
      em_estoque: true,
      preco: 69.9,
      categoria: 'roupas',
      imagem:
        'https://img.ltwebstatic.com/v4/j/spmp/2025/06/19/79/17502680727ed4f8091a2f8124752c0e2bf6117ede_thumbnail_420x.webp',
    },
    {
      id: 7,
      nome: 'Camisa do B.I.G.',
      descricao: 'Camisa de algodão com estampa do B.I.G.',
      em_estoque: true,
      preco: 59.9,
      categoria: 'roupas',
      imagem:
        'https://img.ltwebstatic.com/v4/p/spmp/2025/06/02/21/17488248394f2cb032922d135f78e22e7f07a9bf83_thumbnail_420x.webp',
    },
    {
      id: 8,
      nome: 'Camisa de Peidantes a lactose',
      descricao: 'Camisa de algodão',
      em_estoque: true,
      preco: 59.9,
      categoria: 'roupas',
      imagem:
        'https://img.ltwebstatic.com/v4/j/spmp/2025/12/01/90/17645829205b1937d022b79e8f7ac25c03f666a8eb_thumbnail_420x.webp',
    },
    {
      id: 9,
      nome: 'Chinelo pé do Samuel',
      descricao: 'Chinelo confortável',
      em_estoque: true,
      preco: 9.9,
      categoria: 'calcados',
      imagem:
        'https://i.pinimg.com/736x/5b/2e/29/5b2e29368775dec5f0644e0235af6ecb.jpg',
    },
    {
      id: 10,
      nome: 'Calça Legging Gato Siames',
      descricao: 'Calça legging de alta qualidade',
      em_estoque: true,
      preco: 39.9,
      categoria: 'roupas',
      imagem:
        'https://i.pinimg.com/736x/a6/94/29/a694292b8d0f00061b88a7fe728a3b31.jpg',
    },
    {
      id: 11,
      nome: 'Casaco de Bêbado',
      descricao: 'Casaco de alta qualidade e saboroso',
      em_estoque: true,
      preco: 59.9,
      categoria: 'roupas',
      imagem:
        'https://i.pinimg.com/736x/4f/be/69/4fbe69f2ddd12c5997bc7b4b6bfa9555.jpg',
    },
    {
      id: 12,
      nome: 'Bota Cobra',
      descricao: 'Bota de couro de alta qualidade',
      em_estoque: true,
      preco: 99.9,
      categoria: 'calcados',
      imagem:
        'https://i.pinimg.com/736x/ef/5f/d5/ef5fd55b1192cf3bf5e0c3e8d0c762a3.jpg',
    },    
];

    const produtosFiltrados = produtos.filter(produto => {
        const matchesCategoria = !categoriaFilter || produto.categoria === categoriaFilter;
        const matchesPreco = !precoFilter || checkPrecoRange(produto.preco, precoFilter);

        return matchesCategoria && matchesPreco;
    });

    const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
        switch (ordenacao) {
            case 'preco-asc':
                return a.preco - b.preco;
            case 'preco-desc':
                return b.preco - a.preco;
            case 'novidade':
                return b.id - a.id;
            default:
                return a.nome.localeCompare(b.nome);
        }
    });

    function checkPrecoRange(preco, range) {
        switch (range) {
            case '0-30': return preco <= 30;
            case '30-60': return preco > 30 && preco <= 60;
            case '60-100': return preco > 60 && preco <= 100;
            case '100+': return preco > 100;
            default: return true;
        }
    }

    return (
        <main className="produtos-page">
            <section className="produtos-header">
                <div className="produtos-title">
                    <h1>Nossos Produtos</h1>
                    <p>Descubra nossa coleção completa de produtos selecionados</p>
                </div>
            </section>

            <section className="produtos-filters">
                <div className="filters-container">
                    <div className="filter-group">
                        <label htmlFor="categoria">Categoria:</label>
                        <select
                            id="categoria"
                            value={categoriaFilter}
                            onChange={(e) => setCategoriaFilter(e.target.value)}
                            className="filter-select"
                        >
                            <option value="">Todas as categorias</option>
                            <option value="roupas">Roupas</option>
                            <option value="calcados">Calçados</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="preco">Faixa de preço:</label>
                        <select
                            id="preco"
                            value={precoFilter}
                            onChange={(e) => setPrecoFilter(e.target.value)}
                            className="filter-select"
                        >
                            <option value="">Todos os preços</option>
                            <option value="0-30">Até R$ 30</option>
                            <option value="30-60">R$ 30 - R$ 60</option>
                            <option value="60-100">R$ 60 - R$ 100</option>
                            <option value="100+">Acima de R$ 100</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="ordenar">Ordenar por:</label>
                        <select
                            id="ordenar"
                            value={ordenacao}
                            onChange={(e) => setOrdenacao(e.target.value)}
                            className="filter-select"
                        >
                            <option value="nome">Nome (A-Z)</option>
                            <option value="preco-asc">Preço: Menor para maior</option>
                            <option value="preco-desc">Preço: Maior para menor</option>
                            <option value="novidade">Novidade</option>
                        </select>
                    </div>
                </div>

                <div className="results-info">
                    <p>{produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}</p>
                </div>
            </section>

            <section className="produtos-content">
                <ConteudoPrincipal produtos={produtosOrdenados} />
            </section>
        </main>
    );
}

export default Produtos;