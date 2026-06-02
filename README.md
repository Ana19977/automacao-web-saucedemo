# Automação de Testes: Fluxo de Login (Swag Labs)

Este projeto apresenta a automação de testes de interface (UI) para o cenário de autenticação na plataforma Swag Labs (SauceDemo). O objetivo é validar o comportamento do sistema desde o preenchimento dos dados cadastrais até o direcionamento correto para a área logada.

## Tecnologias e Ferramentas
* **Linguagem:** JavaScript (Node.js)
* **Framework:** Playwright

## Cenário Automatizado
* **Validação de Login:** Acesso à página inicial, preenchimento dos seletores de usuário (`#user-name`) e senha (`#password`), submissão do formulário através do botão de login (`#login-button`) e verificação do carregamento da vitrine de produtos.

## Evidência de Execução
*(Dica: Edite este arquivo no GitHub e arraste o seu vídeo ou o arquivo resultado.png exatamente aqui para que ele apareça na tela)*

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
