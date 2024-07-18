# Aplicação de Lista de Contatos

Esta é uma aplicação de lista de contatos feita em React que permite adicionar, editar e remover contatos. O projeto também inclui uma estilização CSS para uma interface de usuário agradável.

## Funcionalidades

1. **Adicionar Contato**: Permite ao usuário adicionar um novo contato com nome e telefone.
2. **Editar Contato**: Permite ao usuário editar um contato existente.
3. **Remover Contato**: Permite ao usuário remover um contato da lista.

## Estrutura do Código

### Importações e Estados

O componente utiliza o hook `useState` do React para gerenciar seus estados:

- `contatos`: Armazena a lista de contatos.
- `novoNome`: Armazena o valor do campo de entrada onde o usuário digita o nome do contato.
- `novoTelefone`: Armazena o valor do campo de entrada onde o usuário digita o telefone do contato.
- `editandoContato`: Armazena o contato que está sendo editado atualmente.

### Funções

#### `adicionarContato`

- **Descrição**: Adiciona um novo contato à lista de contatos.
- **Parâmetros**: `e` (evento de submissão do formulário).
- **Lógica**:
  1. Previne o comportamento padrão do formulário.
  2. Verifica se os campos de nome e telefone não estão vazios.
  3. Cria um novo contato com um ID único, nome e telefone.
  4. Adiciona o novo contato à lista de contatos.
  5. Limpa os campos de entrada.

#### `removerContato`

- **Descrição**: Remove um contato da lista de contatos.
- **Parâmetros**: `id` (ID do contato a ser removido).
- **Lógica**:
  1. Filtra a lista de contatos para remover o contato com o ID correspondente.

#### `iniciarEdicao`

- **Descrição**: Prepara o componente para a edição de um contato existente.
- **Parâmetros**: `contato` (contato a ser editado).
- **Lógica**:
  1. Define `editandoContato` com o contato a ser editado.
  2. Preenche os campos de entrada com o nome e telefone do contato.

#### `salvarEdicao`

- **Descrição**: Salva as alterações feitas em um contato.
- **Parâmetros**: `e` (evento de submissão do formulário).
- **Lógica**:
  1. Previne o comportamento padrão do formulário.
  2. Atualiza o contato na lista de contatos com os novos valores de nome e telefone.
  3. Limpa os campos de entrada e define `editandoContato` como `null`.

### Renderização

O componente retorna um JSX que inclui:

- Um título "Lista de Contatos".
- Um formulário com campos de entrada para o nome e telefone e um botão de submissão. O texto do botão muda para "Salvar" se um contato estiver sendo editado.
- Uma lista de contatos onde cada contato é exibido com seu nome e telefone, além de botões de "Editar" e "Remover".

### Estilização

A estilização é feita no arquivo `Contatos.css` e inclui:

- Configurações de layout e tipografia para a aplicação.
- Estilos para o formulário, campos de entrada e botões.
- Estilos para a lista de contatos e itens de contato, incluindo efeitos de hover.

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
