# Valid Password API

[English](./README.md) | Português

API que recebe uma senha (string) como parâmetro e valida se é uma senha válida retornando um booleano.

# Tabela de conteúdos

- [Requisitos](#requisitos)
- [Como executar o projeto](#como-executar-o-projeto)
- [Escolhas de implementação](#escolhas-de-implementação)
- [Método de requisição](#método-de-requisição)
- [Tipos de requisição](#tipos-de-requisição)
- [Códigos de resposta HTTP](#códigos-de-resposta-http)
- [Restrições para validar a senha](#restrições-para-validar-a-senha)
- [Exemplos de requisição](#exemplos-de-requisição)
  - [Exemplo de requisição 1](#exemplo-de-requisição-1)
  - [Exemplo de requisição 2](#exemplo-de-requisição-2)
  - [Exemplo de requisição 3](#exemplo-de-requisição-3)

# Requisitos

- Node v18.14.0 ou superior
- NPM v9.4.2 ou superior

# Como executar o projeto

1. Clone o repositório utilizando um dos comandos abaixo:

   - `git clone https://github.com/luis-saes/valid-password-api.git` com HTTPS;
   - `git clone git@github.com:luis-saes/valid-password-api.git` com SSH;
   - `gh repo clone luis-saes/valid-password-api` com GitHub CLI;

2. Acesse a o diretório do projeto e instale as dependências utilizando o comando `npm install`

3. Execute o projeto utilizando o comando `npm run init`

# Escolhas de implementação

- Node.js: ferramenta escolhida por possuir alta familiariadade e por permitir o desenvolvimento rápido e eficiente de uma API simples.
- Express.js: framework escolhido por permitir a criação de rotas e a manipulação de requisições e respostas de forma clara e rápida.
- Jest: framework escolhido para realizar testes unitários, garantindo o bom funcionamento do módulo de validação da senha, escolhido por possuir excelente documentação e ser de fácil uso.
- TypeScript: linguagem escolhida por permitir a tipagem do código, facilitando a leitura, manutenção e escalabilidade do mesmo.
- ESLint e Prettier: ferramentas escolhidas para padronizar e formatar o código, garantindo alta consistência entre diferentes desenvolvedores da mesma ferramenta.
- Clean Code: metodologia utilizada para tornar o código mais legível e fácil de manter, escolhendo cuidadosamente nomes, organização e estruturação do código e evitando repetições desnecessárias.
- SOLID: os princípios aplicáveis foram utilizados para tentar garantir que o código seja de fácil manutenção e escalável, tentando garantir que cada classe tenha apenas uma responsabilidade.
- MVC: padrão de arquitetura escolhido para separar a aplicação em diferentes componentes. Embora não seja necessário para uma aplicação simples como essa, a escolha foi feita para garantir que o código seja fácil de manter e escalável.
- REST: padrão escolhido para garantir que a API seja de fácil de usar, leve, independente e flexível.

# Request method

Essa API só utiliza o método de requisição POST.

# Tipos de requisição

| Método | URL                                       | Descrição                                                                        |
| ------ | ----------------------------------------- | -------------------------------------------------------------------------------- |
| `POST` | `http://localhost:3000/validate-password` | Envia uma senha em formato _string_ e recebe um _boolean_ indicando sua validade |

# Códigos de resposta HTTP

| Código | Título        | Descrição                                            |
| ------ | ------------- | ---------------------------------------------------- |
| `200`  | `OK`          | A requisição foi bem-sucedida                        |
| `400`  | `Bad Request` | A requisição não pode ser entendida devido à sintaxe |

# Restrições para validar a senha

Para ser válida, a senha deve ter:

- Pelo menos 9 caracteres
- Pelo menos 1 dígito
- Pelo menos 1 letra minúscula
- Pelo menos 1 letra maiúscula
- Pelo menos um caractere especial (!@#$%^&\*()-+)
- Sem caracteres repetidos
- Sem espaços em branco

# Exemplos de requisição

Todas as requisições são feitas enviando um objeto JSON com a senha a ser validada.

Formato do objeto JSON:

```json
{
  "password": "senha_a_ser_validada"
}
```

Para enviar uma requisição para a API, você pode usar:

- A linha de comando, utilizando o [cURL](https://curl.se/)
- [Postman](https://www.postman.com/)

Exemplo cURL - Windows 10:

```bash
curl -X POST http://localhost:3000/validate-password ^
     -H "Content-Type:application/json" ^
     -d {\"password\":\"pasWordN@1\"}
```

## Exemplo de requisição 1

Requisição:

```bash
POST http://localhost:3000/validate-password

{
    "password": "paSsVAlid@T0r"
}
```

Resposta:

```bash
{
    "isValid": true
}
```

Status da resposta: `200`

<br>

## Exemplo de requisição 2

Requisição:

```bash
POST http://localhost:3000/validate-password

{
    "password": "false password"
}
```

Resposta:

```bash
{
    "isValid": false
}
```

Status da resposta: `200`

<br>

## Exemplo de requisição 3

Requisição:

```bash
POST http://localhost:3000/validate-password

{
    "password": ""
}
```

Resposta: `Empty password, please provide a password`

Status da resposta: `400`
