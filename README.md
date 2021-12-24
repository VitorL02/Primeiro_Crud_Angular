# Loja Crud

<h1 align="center">
      Esse e meu Primeiro Crud Feito em Angular juntamente com uma REST API Json Server como BackEnd
</h1>

<h2>
  Aprendendo um novo framework frontend o Angular em sua versão 9, utilizando juntamente o conhecimento de HTML e CSS3 criei esse crud (Create - Read - Update - Delete), junto com uma REST API Json server atuando como BackEnd
</h2>	

<h1 align="center">
Technologies
</h1>
<h1 align="center">
 🌪HTML5🌪 
  ♟CSS3♟
 🖱Angular🖱
 ⌨️TypeScript⌨️
 ⛽️JsonServer⛽️
</h1>

<h1 align="center">Home</h1>
<img src="https://user-images.githubusercontent.com/68614036/147359165-31707610-3c9d-4456-a8fe-1609c27bee98.png" alt="Crud Loja Pagina Inicial">
<h1 align="center">Lista de Produtos</h1>
<img src="https://user-images.githubusercontent.com/68614036/147359204-b12d2c65-dd05-4362-bf2b-2475d08d461a.png" alt="Crud Loja Lista de Produtos">
<h1 align="center">Cadastro de Produtos</h1>
<img src="https://user-images.githubusercontent.com/68614036/147359267-27fee43c-e15e-40da-a6f4-300d2ffd3925.png" alt="Crud Loja Cadastro de Produtos">
<h1 align="center">Editar um Produto</h1>
<img src="https://user-images.githubusercontent.com/68614036/147359766-324167cf-c277-41fc-89e7-c5663a02c594.png" alt="Crud Loja Editar Produto">
<h1 align="center">Deletar um Produto</h1>
<img src="https://user-images.githubusercontent.com/68614036/147359871-f086bcb8-58dd-4235-b1e7-39f2bff4cb38.png" alt="Crud Loja Deletar Produto">

<h1 align="center">Funcionamento</h1>
<p>
Utilizando o Angular CLI foram criados os componentes de Home,Header,Footer,Navigation,Product-Crud,Product-Read,Product-Create/Update/delete/Read,onde possuem cada um três
arquivos (separados via configuração em angular.json) Um Html5 CSS3 e TypeScript, o fluxo do sistema é o seguinte > Home > Cadastro de Produtos > Lista de Produto. Em lista de produtos é possivel duas rotas serem acessadas, clicando no icone de atualização é possivel acessar a edição do produto,sendo possivel alterar preço e nome, já clicando no icone de delete e possivel deletar um produto (podendo cancelar a ação). 
<br>
<h3> Components : Contém todos os componentes da Aplicação </h3> 
<h3> Views : Contendo a Home Page com as boas vindas e contendo Product Crud onde a lista de produtos e exibida carregando com ajuda do angular o componente <app-product-read>
</h3> 
<h3> Directives : Contém as Diretivas de Estilo que foram utilizadas para alterar as cores dos botões</h3> 
<h3> Product > product.service.ts : Criado com ajuda do angular, contém toda a logica de acesso aos dados do backend e funções/metodos utilizados na aplicação</h3> 
<h3> Product > product.model.ts : Contém os dados comuns que todo produto tem (Classe produto)</h3> 
<h3> Product > Product-Read-table-Model : Utilizado como modelo para a criação da tabela de produtos</h3> 
<h3> Assets: Possui a logo da aplicação  </h3> 

<h2 align="center"> 
	Arquivos de Configuração
</h2>
<h3> App-Routing.ts: Nesse arquivo foram mapeadas todas as rotas da aplicação  </h3> 
<h3> App.Module.ts: Contém todos os imports utilizados na aplicação incluindo imports feitos pelo Material </h3> 
<h3> BackEnd > db.json : Contém os produtos em forma de arquivo json,onde e consumido pelo frontEnd,todo produto adicionado adiciona um novo objeto a esse arquivo </h3>
</p>


<h1 align = "center">Progresso</h1>
<h2 align="center"> 
	🔋 Crud Loja <strong>Versão 1.0 - Completa</strong> 🔋  
</h2>
