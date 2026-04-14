import style from './ConteudoPrincipal.module.css';
import Card from '../Card';

function ConteudoPrincipal() {

    const listaProdutos = [
        {id:1, nome: 'Camisa', descricao: 'Camisa de algodão', em_estoque: true, preco: 49.90, imagem: 'https://i.pinimg.com/736x/fa/02/4a/fa024a2d05dacef4e4cd25da3d68035e.jpg'},
        {id:2, nome: 'Calça', descricao: 'Calça jeans', em_estoque: true, preco: 99.90, imagem: 'https://i.pinimg.com/736x/93/af/e9/93afe9be8930bc301eb773999a0e879c.jpg'},
        {id:3, nome: 'Tênis', descricao: 'Tênis esportivo', em_estoque: false, preco: 149.90, imagem: 'https://i.pinimg.com/1200x/46/00/e7/4600e792ceae955c18b7a90db1980678.jpg'},    
    ]
    return <>
    <div className={style.wrapper}>
        <div className={style.container}>
        {listaProdutos.map((produto) => (
            <Card key={produto.id} 
            title={produto.nome} 
            desc={produto.descricao} 
            est={produto.em_estoque} 
            price={produto.preco} 
            img={produto.imagem} />
        ))}
        </div>
    </div>
    </>
}
export default ConteudoPrincipal;