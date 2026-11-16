# 🎸 Sistema de Cadastro e Listagem de Instrumentos Musicais

Projeto desenvolvido como parte das atividades práticas da disciplina de desenvolvimento back-end, utilizando Node.js, Express, EJS e MongoDB (Mongoose). O sistema permite o gerenciamento de um estoque de instrumentos musicais com operações de cadastro e consulta.

---

## 🚀 Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram utilizadas no desenvolvimento deste projeto:

* **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript no servidor
* **[Express](https://expressjs.com/pt-br/)** - Framework web rápido e minimalista para Node.js
* **[EJS](https://ejs.co/)** - Motor de visualização (Template Engine) para renderização HTML dinâmica
* **[MongoDB Atlas](https://www.mongodb.com/atlas/database)** - Banco de dados NoSQL em nuvem
* **[Mongoose](https://mongoosejs.com/)** - Biblioteca de modelagem de dados para MongoDB e Node.js

---

## 📁 Estrutura do Projeto

```text
meu-projeto/
├── config/
│   └── conexao.js          # Configuração da conexão com o MongoDB
├── models/
│   └── Instrumento.js      # Schema e Model do Mongoose para os instrumentos
├── views/
│   └── instrumento/
│       ├── add.ejs         # Formulário de cadastro de instrumentos
│       ├── addok.ejs       # Tela de confirmação de cadastro
│       └── lst.ejs         # Tabela de listagem dos instrumentos cadastrados
├── public/                 # Arquivos estáticos (CSS, imagens, etc.)
├── index.js                # Arquivo principal da aplicação e rotas
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
