# Projeto Front-end React

![Labeships](./src/assets/logo.svg)
Um loja das espaçonaves mais famosas da filmografia mundial feito como projeto de introdução aos fundamentos do React na Labenu. 🚀

## Índice
- <a href="#funcionalidades">Funcionalidades do Projeto </a>
- <a href="#layout">Layout </a>
- <a href="#rodar">Como rodar esse projeto </a>
- <a href="#tecnologias">Tecnologias utilizadas </a>
- <a href="#autores">Pessoas autoras </a>
- <a href="#passos">Próximos passos </a>

## Funcionalidades

- [x] Filtro do catálogo de espaçonaves por nome e por filme que ela estava presente
- [x] Filtro do catálogo de espaçonaves por preço mínimo e preço máximo
- [x] Ordenação do catálogo por ordem alfabética do nome do filme crescente e decrescente
- [x] Ordenação do catálogo por ordem  do nome da nave crescente e decrescente
- [x] Ordenação do catálogo por ordem  de preço da nave crescente e decrescente
- [x] Layout da página de produtos
- [x] Layout da página da sacola de compras

## Layout

![Página de Produtos](./src/assets/productScreen.png)
![Página da Sacola de Compras](./src/assets/bagScreen.png)












Esse é o projeto de introdução aos fundamentos do React. Aqui, vamos praticar a estrutura do que consideramos a estrutura do React. O objetivo é que funcione como o front-end de um E-Commerce

- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage

## Instruções

O Astrodev deixou um testamento e essa foi a herança deixada pra vocês:

```
Estudantes do meu coração,
Estou querendo montar um e-commerce de itens espaciais e vocês serão responsáveis por essa construção. 
Pretendo montar diferentes linhas de produtos. 

As possíveis linhas de produto são:
- Satélites antigos;
- Roupas espaciais;
- Camisetas com estampas divertidas relacionadas ao espaço;
- Viagens espaciais;
- Meteoritos / aerolitos como pedras preciosas;
- Brinquedos e produtos infantis temáticos;
- Naves / Foguetes / Ônibus espaciais;

Escolham uma linha dentre essas, e criem um e-commerce de acordo com a lista de requisitos.

**O prazo é até sexta, 23h59.** 

Att.
```

# Requisitos

O projeto consistirá em 3 grandes partes:

1. Home
    - Mostrando todos os produtos
    - Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
    - Produtos:
        - Devem ter um botão que permita adicioná-los ao carrinho
        - Devem exibir o nome, preço e imagem em um card
2. Carrinho
    - Mostrar todos os produtos e quantidades adicionadas
    - Capacidade de remover itens do carrinho
    - Mostrar o valor total do carrinho
3. Filtro
    - Por valor mínimo e máximo
    - Por nome do produto

Exemplo de estruturação de **UM** produto (Lembrem-se que vocês terão uma lista contendo todos):

```jsx
{
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
}
```

### Lista de Requisitos
- Home (Lista de Produtos)
    - [ ]  O usuário deve ser capaz de visualizar uma lista de produtos
    - [ ]  O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
    - [ ]  O usuário deve ser capaz de adicionar um produto no carrinho
- Carrinho
    - [ ]  O usuário deve ser capaz de visualizar os produtos adicionados
    - [ ]  O usuário deve ser capaz de visualizar a quantidade correta de cada produto
    - [ ]  O usuário deve ser capaz de remover itens do carrinho
    - [ ]  O usuário deve ser capaz de ver corretamente o valor total de sua compra
    - [ ]  Quando a página é atualizada, os itens devem continuar no carrinho
- Filtros e Ordenação
    - [ ]  O usuário deve ser capaz de filtrar os itens por preço mínimo
    - [ ]  O usuário deve ser capaz de filtrar os itens por preço máximo
    - [ ]  O usuário deve ser capaz de realizar uma busca por nome
    - [ ]  O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
    - [ ]  O usuário deve ser capaz de adicionar  filtros, busca e ordenação simultaneamente
    - [ ]  O usuário deve ser capaz de retornar à visualização sem filtros
    
 ### 

O layout da página é escolha de vocês! O exemplo abaixo é só uma implementação bemmm simples das funcionalidades, não se atenham a ele.

http://fluttering-coast.surge.sh/
 

https://user-images.githubusercontent.com/11279432/197185533-14582ca3-9eb0-4a5a-b57c-b94913ff2dd6.mp4



    
  ### Conseguiu terminar? Aqui temos alguns **desafios**
  1. Salvar e Recuperar conteúdo do carrinho usando o `LocalStorage`;
  2. Dediquem um tempo para melhorar o layout e a usabilidade do seu site! Se baseiem em outros e-commerces que vocês gostam para chegar em um resultado   mais próximo do padrão de design visto no mercado;
  3. Se TODO O RESTO DO SITE  e os dois desafios anteriores estiverem funcionando, pensem: qual outra funcionalidade está faltando? Decidam o que vocês concordam que poderia ser uma boa adição à loja virtual (pode ser qualquer funcionalidade, desde que vocês consigam implementá-la). Todas as funcionalidades extras implementadas devem ser listadas e explicadas no readme do projeto para que possam ser avaliadas.
  
  ## Entrega
  
- Faça o fork desse repositório e realize o clone da sua cópia `seu-nome-de-usuario/projeto-frontendreact`.
   <details>
   <summary>Quer uma dica?</summary>
   <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Como adicionar o projeto no repositório"/>
   </details>
- Crie os arquivos do projeto dentro deste repo;
- Execute o fluxo de entrega do git. **Lembre-se de abrir os PRs para seu próprio repositório.**
- Para isso, você precisará fazer o projeto utilizando **branches**. Evite fazer as alterações direto na branch ```main```
    <details>
       <summary>Dúvidas sobre o Git & Github?</summary>
       <p>Adiciomos um vídeo explicando o <strong>processo de entrega</strong> [do fork ao pull request] no Material Assincrono da <a href="https://classroom.google.com/w/NTM0NjA2NDg3MjIx/tc/NTM2NDg5NTQyODg4">A005 - Git e Github</a>. Esse vídeo também exemplifica situações que podem acontecer durante o fluxo de utilização do Git.</p>
    </details>
- Entregue o **link do repo** no [Formulário de entrega](https://forms.gle/S9XChPZravP3WdxL6) 
- Utilize o **surge** para fazer o deploy do seu projeto.

