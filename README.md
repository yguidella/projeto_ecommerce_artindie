# 🛍️ Projeto E-commerce ArtIndie

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

## 📌 Descrição

💡 Projeto de aplicação console (CLI) desenvolvido em TypeScript com foco em prática de Programação Orientada a Objetos (POO) e organização em camadas. O sistema simula uma galeria de produtos artísticos chamada ArtIndie, permitindo o gerenciamento completo de itens via menu interativo no terminal.

---

## 🚀 Tecnologias utilizadas

* JavaScript
* TypeScript
* Node.js
* readline-sync

---

## 📚 Funcionalidades

* Cadastro de produtos artísticos
* Listagem de produtos cadastrados
* Busca por número do produto
* Atualização de produtos
* Remoção de produtos
* Busca de produtos por artista
* Menu interativo no terminal (CLI)

---

## 🏗️ Arquitetura do projeto

Estrutura baseada em MVC simplificado:

* **Menu (Menu.ts)** → interface de interação com o usuário via terminal
* **Controller (ProdutoController)** → regras de negócio e operações CRUD em memória
* **Model (Produto / ProdutoArte)** → entidades do sistema com herança e encapsulamento
* **Repository (ProdutoRepository)** → contrato (interface) das operações do sistema

---

## 📌 Conceitos aplicados

* Programação Orientada a Objetos (POO)
* Herança (Produto → ProdutoArte)
* Encapsulamento (getters e setters)
* Polimorfismo (método visualizar sobrescrito)
* Interfaces em TypeScript
* Estrutura em camadas (MVC simplificado)
* Manipulação de dados em memória (array)

---

## ▶️ Como rodar o projeto

```bash
# Clonar repositório
git clone https://github.com/yguidella/projeto_ecommerce_artindie

# Entrar na pasta
cd projeto_ecommerce_artindie

# Instalar dependências
npm install

# Executar o projeto
npx ts-node Menu.ts

# 🎯 Objetivo do projeto

💡 Projeto desenvolvido para prática de lógica de programação, POO e estruturação de sistemas em TypeScript durante o processo de aprendizado back-end.

# 👩‍💻 Desenvolvido por

Yasmin Guidella
GitHub: https://github.com/yguidella
