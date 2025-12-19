
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Hambúrguer de Carne',
    shortDescription: 'Cebola com queijo',
    price: 18.00,
    image: 'https://i.pinimg.com/1200x/01/99/c9/0199c9c435248829641ef17b8fa41a4d.jpg',
    category: 'Hambúrguer',
    longDescription: 'Hambúrguer de carne com queijo fresco e cebola, servido com batatas fritas e bebida. Aproveite nossa oferta de 20% de desconto com o NOVO código promocional.'
  },
  {
    id: 2,
    name: 'Hambúrguer de Frango',
    shortDescription: 'Frango com queijo',
    price: 12.00,
    image: 'https://i.pinimg.com/1200x/4c/87/9f/4c879fd5ce500a39805a182df65a4109.jpg',
    category: 'Hambúrguer',
    longDescription: 'Delicioso hambúrguer de frango grelhado com queijo derretido, alface crocante e um pão macio. Perfeito para uma refeição leve e saborosa.'
  },
  {
    id: 3,
    name: 'Hambúrguer Clássico',
    shortDescription: 'Carne com alface',
    price: 24.00,
    image: 'https://i.pinimg.com/1200x/b6/b6/f5/b6b6f58313ed736a56be6665ca9da91a.jpg',
    category: 'Hambúrguer',
    longDescription: 'O clássico que nunca falha. Pão, carne suculenta e alface fresca. A simplicidade que conquista todos os paladares.'
  },
  {
    id: 4,
    name: 'Hambúrguer Grelhado',
    shortDescription: 'Carne Grelhada',
    price: 14.00,
    image: 'https://i.pinimg.com/1200x/db/71/4e/db714e68aac3e7749f0a1ff6374f00ef.jpg',
    category: 'Hambúrguer',
    longDescription: 'Uma opção mais saudável, mas sem perder o sabor. Peito de frango grelhado na perfeição, acompanhado de vegetais frescos.'
  },
  {
    id: 5,
    name: 'Salada Fresca',
    shortDescription: 'Mix de folhas',
    price: 14.00,
    image: 'https://i.pinimg.com/1200x/9c/b6/c5/9cb6c5b38b19ccfb6c37da8f3b0957e0.jpg',
    category: 'Saladas',
    longDescription: 'Uma combinação refrescante de folhas verdes, tomate cereja, pepino e um molho especial da casa. Ideal para um dia quente.'
  },
  {
    id: 6,
    name: 'Massa Carbonara',
    shortDescription: 'Clássico italiano',
    price: 28.00,
    image: 'https://i.pinimg.com/1200x/af/f0/fd/aff0fd62118135fe35aa48be3be2c474.jpg',
    category: 'Massas',
    longDescription: 'Espaguete com um molho cremoso de ovos, queijo pecorino, pancetta e pimenta do reino. Uma verdadeira viagem à Itália.'
  }
];