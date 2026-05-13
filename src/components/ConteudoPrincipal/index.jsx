import styles from './ConteudoPrincipal.module.css';
import Card from '../Card';
import { useCarrinho } from "../../Context/CarrinhoContext";

function ConteudoPrincipal({ produtos: produtosExternos }) {

  const { adicionarAoCarrinho } = useCarrinho();

  const listaProdutos = produtosExternos || [
    {
      id: 1,
      nome: 'Camisa de Cerveja',
      descricao: 'Camisa de algodão',
      em_estoque: true,
      preco: 49.9,
      imagem:
        'https://i.pinimg.com/736x/fa/02/4a/fa024a2d05dacef4e4cd25da3d68035e.jpg',
    },
    {
      id: 2,
      nome: 'Calça Usada Viva',
      descricao: 'Calça jeans',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/736x/93/af/e9/93afe9be8930bc301eb773999a0e879c.jpg',
    },
    {
      id: 3,
      nome: 'Tênis Lacoste (original)',
      descricao: 'Tênis esportivo',
      em_estoque: false,
      preco: 149.9,
      imagem:
        'https://i.pinimg.com/1200x/46/00/e7/4600e792ceae955c18b7a90db1980678.jpg',
    },
    {
      id: 4,
      nome: 'Camisa Macakito',
      descricao: 'Camisa confortável e estilosa',
      em_estoque: true,
      preco: 59.9,
      imagem:
        'https://i.pinimg.com/1200x/d3/e3/2f/d3e32ffd8917b09364e1f4814d708171.jpg',
    },
    {
      id: 5,
      nome: 'BiquiPUTIN',
      descricao: 'Biquíni de alta qualidade',
      em_estoque: true,
      preco: 39.9,
      imagem:
        'https://i.pinimg.com/1200x/d9/e1/90/d9e19080ede42a82c78d7f2bb9f2df46.jpg',
    },
    {
      id: 6,
      nome: 'Camisa do 3Tupac',
      descricao: 'Camisa de algodão com estampa do Tupac',
      em_estoque: true,
      preco: 69.9,
      imagem:
        'https://img.ltwebstatic.com/v4/j/spmp/2025/06/19/79/17502680727ed4f8091a2f8124752c0e2bf6117ede_thumbnail_420x.webp',
    },
    {
      id: 7,
      nome: 'Camisa do B.I.G.',
      descricao: 'Camisa de algodão com estampa do B.I.G.',
      em_estoque: true,
      preco: 59.9,
      imagem:
        'https://img.ltwebstatic.com/v4/p/spmp/2025/06/02/21/17488248394f2cb032922d135f78e22e7f07a9bf83_thumbnail_420x.webp',
    },
    {
      id: 8,
      nome: 'Camisa de Peidantes a lactose',
      descricao: 'Camisa de algodão',
      em_estoque: true,
      preco: 59.9,
      imagem:
        'https://img.ltwebstatic.com/v4/j/spmp/2025/12/01/90/17645829205b1937d022b79e8f7ac25c03f666a8eb_thumbnail_420x.webp',
    },
    {
      id: 9,
      nome: 'Chinelo pé do Samuel',
      descricao: 'Chinelo confortável',
      em_estoque: true,
      preco: 9.9,
      imagem:
        'https://i.pinimg.com/736x/5b/2e/29/5b2e29368775dec5f0644e0235af6ecb.jpg',
    },
    {
      id: 10,
      nome: 'Calça Legging Gato Siames',
      descricao: 'Calça legging de alta qualidade',
      em_estoque: true,
      preco: 39.9,
      imagem:
        'https://i.pinimg.com/736x/a6/94/29/a694292b8d0f00061b88a7fe728a3b31.jpg',
    },
    {
      id: 11,
      nome: 'Casaco de Bêbado',
      descricao: 'Casaco de alta qualidade e saboroso',
      em_estoque: true,
      preco: 59.9,
      imagem:
        'https://i.pinimg.com/736x/4f/be/69/4fbe69f2ddd12c5997bc7b4b6bfa9555.jpg',
    },
    {
      id: 12,
      nome: 'Bota Cobra',
      descricao: 'Bota de couro de alta qualidade',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/736x/ef/5f/d5/ef5fd55b1192cf3bf5e0c3e8d0c762a3.jpg',
    },
    {
      id: 13,
      nome: 'Colar de Bitucas',
      descricao: 'Colar de nicotina com predras preciosas',
      em_estoque: true,
      preco: 599.9,
      imagem:
        'https://i.pinimg.com/736x/10/59/30/10593009a6d860423293a1c385eec3f5.jpg',
    },
    {
      id: 14,
      nome: 'Óculos de Dedo',
      descricao: 'Óculos de alta qualidade',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/736x/4d/44/24/4d442471905c395baba28664e499453f.jpg',
    },
    {
      id: 15,
      nome: 'Óculos de Dúvida',
      descricao: 'Óculos',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/1200x/d9/6e/62/d96e627351d3758cfc7fdc384eed4f37.jpg',
    },
    {
      id: 16,
      nome: 'Anel do Samuel',
      descricao: 'Anel de tampa de Maionese do Ken',
      em_estoque: true,
      preco: 59.9,
      imagem:
        'https://i.pinimg.com/736x/ea/ce/f7/eacef7a61d1a22e85a8fba7353dfda08.jpg',
    },
    {
      id: 17,
      nome: 'Anel',
      descricao: 'Anel de dedo de Morto',
      em_estoque: true,
      preco: 89.9,
      imagem:
        'https://i.pinimg.com/736x/15/31/bb/1531bb958c42611fb99c7c32d1127156.jpg',
    },

    {
      id: 18,
      nome: 'Brinco Pika',
      descricao: 'Brinco de alta qualidade',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/736x/83/65/6e/83656e14a02950dc5840aee354f20b65.jpg',
    },
    {
      id: 19,
      nome: 'Óculos de Amante',
      descricao: 'Óculos de alta performance para amantes de moda',
      em_estoque: true,
      preco: 109.9,
      imagem:
        'https://i.pinimg.com/736x/e8/1f/ff/e81fffcb9670ca69d1ffd92521a858ff.jpg',
    },
    {
      id: 18,
      nome: 'Brinco Pika',
      descricao: 'Brinco de alta qualidade',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/736x/83/65/6e/83656e14a02950dc5840aee354f20b65.jpg',
    },
    {
      id: 18,
      nome: 'Brinco Pika',
      descricao: 'Brinco de alta qualidade',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/736x/83/65/6e/83656e14a02950dc5840aee354f20b65.jpg',
    },
    {
      id: 18,
      nome: 'Brinco Pika',
      descricao: 'Brinco de alta qualidade',
      em_estoque: true,
      preco: 99.9,
      imagem:
        'https://i.pinimg.com/736x/83/65/6e/83656e14a02950dc5840aee354f20b65.jpg',
    },

  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {listaProdutos.map((produto) => (
          <Card
            key={produto.id}
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