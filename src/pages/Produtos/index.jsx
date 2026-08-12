import { useState } from "react";
import "./style.css";
import ConteudoPrincipal from "../../components/ConteudoPrincipal";
import produtos from "../../data/produtos";

function Produtos() {
    const [termoPesquisa, setTermoPesquisa] = useState("");
    const [categoriaFilter, setCategoriaFilter] = useState("");
    const [precoFilter, setPrecoFilter] = useState("");
    const [ordenacao, setOrdenacao] = useState("nome");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const produtosFiltrados = produtos.filter(produto => {
        const matchesCategoria = !categoriaFilter || produto.categoria === categoriaFilter;
        const matchesPreco = !precoFilter || checkPrecoRange(produto.preco, precoFilter);
        const matchesBusca = !termoPesquisa || produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase());

        return matchesCategoria && matchesPreco && matchesBusca;
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
                <form className="form-busca" onSubmit={handleSubmit}>
                    <label className="label-busca" htmlFor="pesquisa-produtos">
                        Pesquisar produtos
                    </label>
                    <div className="input-group">
                        <input
                            id="pesquisa-produtos"
                            type="text"
                            value={termoPesquisa}
                            onChange={(event) => setTermoPesquisa(event.target.value)}
                            placeholder="Digite o nome do produto"
                        />
                        <button type="submit">Buscar</button>
                    </div>
                </form>

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
                            <option value="acessorios">Acessórios</option>
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
                    <p>{produtosOrdenados.length} produto{produtosOrdenados.length !== 1 ? 's' : ''} encontrado{produtosOrdenados.length !== 1 ? 's' : ''}</p>
                </div>
            </section>

            <section className="produtos-content">
                {produtosOrdenados.length === 0 ? (
                    <p className="sem-resultado">
                        Nenhum produto encontrado para: "{termoPesquisa}"
                    </p>
                ) : (
                    <ConteudoPrincipal produtos={produtosOrdenados} />
                )}
            </section>
        </main>
    );
}

export default Produtos;