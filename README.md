# API Integration & Contract Testing - Restful-booker

Projeto desenvolvido para fins de estudo e prática de **análise de documentação de APIs**, **mapeamento de contratos de integração** e **automação de testes** utilizando TypeScript e a API nativa `fetch`.

A API escolhida para este laboratório foi a **Restful-booker**, uma aplicação de *playground* voltada especificamente para testes de integração e validação de rotas HTTP.

---

## 📂 Estrutura do Repositório

O projeto está organizado separando a documentação técnica dos scripts de automação:

```text
metodosGetPost/
├── docs/
│   └── contrato-restful-booker.md    # Mapeamento detalhado dos contratos (GET e POST)
├── src/
│   └── tests/
│       └── restful-booker.test.ts    # Script de automação e validação em TypeScript
├── package.json                      # Dependências e scripts do projeto
└── tsconfig.json                     # Configuração do compilador TypeScript

---

## 📋 Mapeamento de Contratos (Resumo)

O documento completo encontra-se na pasta docs/. Abaixo está o resumo dos endpoints mapeados:

Método     Endpoint       Descrição                  Status Esperado
GET        /booking/:id   Recupera os detalhes de    200 OK
                          uma reserva específica 
                          pelo ID.      

POST       /booking       Cria uma nova reserva      200 OK
                          com payload JSON 
                          aninhado (dados de 
                          estadia e cliente). 

---


## ⚙️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:

     1 - Node.js (versão 24 ou superior recomendada, pois possui suporte nativo ao fetch).

     2 - Gerenciador de pacotes npm.

---

## 🚀 Como Executar o Projeto

     1 - Clone o repositório e acesse a pasta:  
             git clone <url-do-seu-repositorio>
             cd metodosGetPost

     2 - Instale as dependências:
             npm install

     3 - Instale as ferramentas do TypeScript e Node com:
             npm install -D typescript ts-node @types/node

     4 - Execute o script de testes automatizados:
             npm run test:api

---

## 🛠️ Tecnologias Utilizadas

      TypeScript: Linguagem principal para tipagem estática e segurança no código de automação.
      Node.js (Fetch API): Execução de requisições HTTP nativas.
      Markdown: Documentação técnica dos contratos de integração.