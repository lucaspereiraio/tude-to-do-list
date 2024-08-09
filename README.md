# Tude Diniz To-Do List

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de estágio em Desenvolvimento de Software na Tude Diniz. Trata-se de uma aplicação de lista de tarefas (To-Do List) construída utilizando React e Material-UI, com foco na criação, visualização, edição e exclusão de tarefas.

## Funcionalidades

- Cadastro de Usuário: Tela de registro para novos usuários com validação de campos.
- Login: Tela de login com autenticação de usuário.
- Adicionar Tarefas: Formulário para criar novas tarefas, com a opção de definir prioridade e adicionar uma descrição.
- Visualizar Tarefas: Lista de tarefas exibindo o título, descrição, prioridade e um checkbox para marcar a tarefa como concluída.
- Editar Tarefas: Possibilidade de editar o texto, a cor (prioridade) e a descrição de uma tarefa existente.
- Excluir Tarefas: Opção para remover tarefas da lista.
- Persistência de Dados: As tarefas são armazenadas no localStorage, garantindo que os dados permaneçam após recarregar a página.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Material-UI: Biblioteca de componentes React para estilização e responsividade da interface.
- TypeScript: Superconjunto do JavaScript que adiciona tipagem estática ao código.

## Estrutura do Projeto

O projeto é composto pelos seguintes componentes principais:

- App.tsx: Componente principal que gerencia o estado global das tarefas e a interação entre os componentes.
- Header.tsx: Componente de cabeçalho que exibe o título da aplicação.
- Login.tsx e Register.tsx: Componentes de validação de login e registro de usuários.
- CreateItem.tsx: Componente que contém o formulário para criar novas tarefas.
- ToDoItem.tsx: Componente que exibe e permite editar ou excluir uma tarefa existente.
- PrintList.tsx: componente que printa a lista de tarefas por completo.
