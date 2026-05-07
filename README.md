# 🎨 Galeria Artindie

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![POO](https://img.shields.io/badge/Paradigma-POO-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge)

## 📝 Descrição
A **Galeria Artindie** é uma aplicação de console (CLI) desenvolvida para gerenciar o acervo de uma galeria de arte independente. O sistema permite o controle completo de produtos artísticos, oferecendo uma interface intuitiva para o gerenciamento de inventário, registro de artistas e categorias.

Este projeto resolve o problema de organização manual de itens de arte, permitindo buscas rápidas por número de registro ou pelo nome do artista criador.

## ✨ Funcionalidades
- ✅ **CRUD Completo**: Cadastrar, listar, buscar, atualizar e deletar produtos.
- 🔍 **Busca Especializada**: Filtro de obras por nome do artista (case-insensitive).
- 🖼️ **Gestão de Categorias**: Classificação organizada das artes por tipo.
- 📊 **Visualização Detalhada**: Exibição formatada dos dados de cada obra no console.

## 🛠️ Tecnologias
Abaixo, as principais ferramentas utilizadas no desenvolvimento:

| Tecnologia | Finalidade |
| :--- | :--- |
| **TypeScript** | Linguagem principal, trazendo tipagem estática e segurança. |
| **Node.js** | Ambiente de execução para o JavaScript no console. |
| **readline-sync** | Biblioteca para captura de entradas do usuário via terminal. |
| **ts-node** | Execução direta de arquivos TypeScript. |

## 📂 Estrutura do Projeto
A organização segue os padrões de Clean Code e separação de responsabilidades:

```🌳
projeto_ecommerce_artindie/
├── src/
│   ├── controller/
│   │   └── ProdutoController.ts   # Lógica de negócio e gestão do array
│   ├── model/
│   │   ├── Produto.ts             # Classe abstrata (Base)
│   │   └── ProdutoArte.ts         # Classe especializada (Herança)
│   └── repository/
│       └── ProdutoRepository.ts   # Interface de contrato
├── Menu.ts                        # Ponto de entrada (View/Interação)
├── package.json                   # Dependências e scripts
└── tsconfig.json                  # Configurações do compilador TS
```

##🚀 Instalação e Execução
Pré-requisitos
Node.js instalado.

Gerenciador de pacotes (NPM ou Yarn).

Passo a Passo
Clone o repositório:

Bash
git clone [https://github.com/yguidella/galeria-artindie.git](https://github.com/yguidella/galeria-artindie.git)
Acesse a pasta do projeto:

Bash
cd galeria-artindie
Instale as dependências:

Bash
npm install
Execute a aplicação:

Bash
npm start

##💻 Exemplos de Uso
Exemplo de interação no terminal para cadastrar uma nova obra:

Entrada:

Entre com a opção desejada: 1
Digite o número do produto: 101
Digite o nome do produto: Noite Estrelada
Digite o preço do produto: 1500.00
Digite a categoria do produto: Pintura
Digite o nome do artista: Van Gogh
Saída esperada:


Produto "Noite Estrelada" cadastrado com sucesso!

##🛡️ Resiliência e Tratamento de Erros
Validação de Existência: O sistema verifica se um produto existe antes de tentar atualizar ou deletar.

Feedback ao Usuário: Mensagens claras no console para buscas sem resultados.

Segurança de Tipagem: Uso de classes abstratas e interfaces para evitar instâncias genéricas ou incompletas.

##🎓 Aprendizados
O desenvolvimento deste projeto permitiu consolidar:

Herança e Polimorfismo: Criação de classes especializadas a partir de uma base comum.

Interfaces: Definição de padrões para a camada de controle.

Manipulação de Arrays: Uso eficiente de métodos como find e splice.

## Desenvolvido por Yasmin Guidella 📫 y.guidella8@outlook.com
