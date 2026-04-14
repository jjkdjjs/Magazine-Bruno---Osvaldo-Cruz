import style from "./ConteudoPrincipal.module.css"
import Card from "../Card";

function ConteudoPrincipal() {

    const lista_produtos = [
        {id: 1, nome: "Mouse Gamer", preco: 12.90, em_estoque: true, img: ""},
        {id: 2, nome: "Teclado Gamer", preco: 118.90, em_estoque: false, img: ""},
        {id: 3, nome: "Monitor Gamer", preco: 590.90, em_estoque: true, img: ""},
    ]
    return <>
        {lista_produtos.map((produto) => (
            <Card key={produto.id} 
            title={produto.nome} 
            price={produto.preco} 
            desc={produto.em_estoque}
            img={produto.img}
            />
        ))}
    </>
}

export default ConteudoPrincipal;