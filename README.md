# Burger Bliss 🍔

Bem-vindo ao **Burger Bliss**! Este é um aplicativo moderno de pedidos de comida, focado em hambúrgueres, massas e saladas, com uma interface elegante, responsiva e suporte a tema escuro.

![Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## ✨ Funcionalidades

- **Catálogo de Produtos**: Visualize hambúrgueres, massas e saladas com imagens, descrições e preços.
- **Favoritos**: Toque no coração para favoritar/desfavoritar produtos. Uma mensagem de confirmação aparece ao favoritar.
- **Carrinho de Compras**: Adicione produtos ao carrinho, ajuste quantidades e veja o valor total.
- **Busca**: Pesquise produtos por nome ou descrição.
- **Perfil**: Edite informações pessoais e endereço de entrega.
- **Tema Claro/Escuro**: Alterne entre temas com um botão animado.
- **Navegação Intuitiva**: Barra de navegação inferior com animações e contagem de itens no carrinho.
- **Feedback Visual**: Toasts para ações como adicionar ao carrinho ou favoritar.

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js (recomendado v18+)

### Instalação

1. Clone o repositório ou baixe os arquivos.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o projeto:
   ```bash
   npm run dev
   ```
4. Acesse no navegador: [http://localhost:3000](http://localhost:3000)

## 🗂️ Estrutura de Pastas

```
├── App.tsx                # Componente principal e roteamento
├── components/            # Componentes reutilizáveis (cards, nav, etc)
├── context/               # Contexto de tema
├── data/                  # Dados dos produtos
├── hooks/                 # Hooks customizados
├── screens/               # Telas principais (Home, Carrinho, Favoritos, etc)
├── types.ts               # Tipos TypeScript
├── vite.config.ts         # Configuração do Vite
├── tsconfig.json          # Configuração do TypeScript
```

## 🧩 Principais Telas

- **HomeScreen**: Lista produtos por categoria, permite favoritar e adicionar ao carrinho.
- **DetailsScreen**: Mostra detalhes do produto, permite ajustar quantidade, favoritar e adicionar ao carrinho.
- **CartScreen**: Gerencie itens do carrinho, ajuste quantidades e finalize pedido.
- **FavoritesScreen**: Veja todos os produtos favoritados.
- **SearchScreen**: Pesquise produtos rapidamente.
- **ProfileScreen**: Edite nome, email e endereço.

## 🎨 Tecnologias Utilizadas
- React 19
- TypeScript
- Vite
- TailwindCSS (via CDN)
- Google Fonts & Material Symbols

## 💡 Dicas de Uso
- Clique no coração para favoritar um produto. Uma mensagem de confirmação será exibida.
- O botão de adicionar ao carrinho também exibe um toast de confirmação.
- O tema pode ser alternado a qualquer momento no topo da tela inicial.
- A navegação inferior permite alternar entre as principais telas rapidamente.

## 📦 Customização
- Para adicionar mais produtos, edite o arquivo `data/products.ts`.
- Para alterar categorias, ajuste o tipo `Category` em `types.ts`.
- Para personalizar temas, edite o Tailwind config no `index.html`.

## 🛡️ Licença
Este projeto é open-source e pode ser usado livremente para fins de estudo e portfólio.

---

Feito com ❤️ por Victor Nascimento. Bom apetite!
