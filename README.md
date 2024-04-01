Nome do Projeto
Descrição curta do projeto.

Pré-requisitos
Node.js (versão X.X.X)
MongoDB (ou outro banco de dados de sua escolha)
Chave de API do TMDb (para consumir a API do TMDb)
Configuração do Ambiente
Clone o repositório:
bash
Copy code
git clone 
Instale as dependências do projeto:
bash
Copy code
cd nome-do-projeto
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

env
Copy code
PORT=3000
TMDB_API_KEY=Key de acesso TMDB
ACCESS_TOKEN_SECRET=Key acesso mongo DB
Executando o Servidor
Para iniciar o servidor, execute o seguinte comando:

bash
Copy code
npm start
O servidor estará acessível em http://localhost:3000.

Rotas da API
Usuários
GET /api/users: Obtém todos os usuários.
GET /api/users/:id: Obtém um usuário pelo ID.
POST /api/users: Cria um novo usuário.
PUT /api/users/:id: Atualiza um usuário existente pelo ID.
DELETE /api/users/:id: Exclui um usuário pelo ID.
Filmes
GET /api/tmdb/movies/popular: Obtém os filmes populares do TMDb.
Testes
O projeto possui uma suite de testes para garantir o bom funcionamento das rotas e funcionalidades implementadas. Os testes são escritos usando o framework de teste Mocha e a biblioteca de assert Chai. Além disso, utilizamos o Supertest para realizar requisições HTTP durante os testes de integração.

Executando os Testes
Para executar os testes, utilize o seguinte comando:

bash
Copy code
npm test
Este comando irá iniciar a execução da suite de testes e exibir os resultados no console.

Estrutura dos Testes
Os testes estão localizados no diretório src/tests e estão divididos em diferentes arquivos de acordo com o contexto ou funcionalidade que estão testando. Por exemplo, os testes das rotas de usuários estão no arquivo userRoutes.test.js.

Cada arquivo de teste contém casos de teste individuais que verificam o comportamento esperado de uma determinada rota ou funcionalidade. Os casos de teste são escritos de forma descritiva e incluem asserções que verificam se o resultado obtido corresponde ao resultado esperado.





