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
arquivos (separados via configuração em angular.json) Um Html5 CSS3 e TypeScript  
  <strong> </strong> <br>
<h3> index.php : Redireciona o Usuario para tela de cadastro ou a de login no sistema </h3> 
<h3> cadastro.php : Permite um usuario a realizar cadastro no banco de dados (Somente usuarios cadastrados conseguem acessar sistema.php (caso o login do mesmo seja correto)) 
</h3> 
<h3> login.php : Caso o Usuario tenha criado um Login o Mesmo consegue acessar <strong>sistema.php</strong> Que permite alterar os registros dos usuarios  </h3> 
<h3> sistema.php : Lista todos os usuarios do banco de dados já cadastrados </h3> 
<h3> edit.php : Caso em algum registro seja necessario alteração a pagina de edit.php traz o registro do usuario selecionado via ID </h3> 

<h2 align="center"> 
	Arquivos de Configuração
</h2>
<h3> config.php : Realiza toda a conexão com o banco de dados</h3>
<h3> sair.php : Toda vez que um usario solicita sair do sistema todos os dados da sessões são limpos,permitindo um novo login</h3>
<h3> saveEdit.php : Se um usuario estiver logado ele permite editar registros,esse arquivo realiza os updates nos devidos usuarios </h3>
<h3> testeLogin.php : Realiza as verificações se o usuario esta realmente logado para acessar o sistema,não permite que se caso o usuario não esteja em uma sessão acesse as paginas via URL </h3>
<h3> Database > Usuarios.sql : Todo o banco de dados criado via MYSQL </h3>
</p>


<h1 align = "center">Progresso</h1>
<h2 align="center"> 
	🔋 Crud Loja <strong>Versão 1.0 - Completa</strong> 🔋  
</h2>
