# Automação de Testes: Fluxo de Login (Swag Labs)

Este projeto apresenta a automação de testes de interface (UI) para o cenário de autenticação na plataforma Swag Labs (SauceDemo). O objetivo é validar o comportamento do sistema desde o preenchimento dos dados cadastrais até o direcionamento correto para a área logada.

## Tecnologias e Ferramentas
* **Linguagem:** JavaScript (Node.js)
* **Framework:** Playwright

## Cenário Automatizado
* **Validação de Login:** Acesso à página inicial, preenchimento dos seletores de usuário (`#user-name`) e senha (`#password`), submissão do formulário através do botão de login (`#login-button`) e verificação do carregamento da vitrine de produtos.

## Evidência de Execução
[744719be-7912-496d-97cf-9466d805dd4b (1).webm](https://github.com/user-attachments/assets/5b5d9acd-6e4a-4425-a4c4-3d30d632d022)

## Instruções de Execução

Para rodar o projeto localmente, certifique-se de ter o Node.js instalado e siga os passos abaixo no terminal:

1. Clone este repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Acesse a pasta do projeto:
cd nome-do-repositorio

3. Instale as dependências necessárias:
npm install

4. Execute os testes em modo headless:
npx playwright test
