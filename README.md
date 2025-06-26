## **Casos de Teste Automatizados – Cypress**

###  **1. Login e Logout**

#### Caso de Teste 1.1 – Login com dados corretos

- **Objetivo**: Verificar se o login funciona com usuário e senha válidos.
    
- **Passos**:
    
    1. Acessar a URL: [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/)
        
    2. Preencher usuário: `standard_user`
        
    3. Preencher senha: `secret_sauce`
        
    4. Clicar em "Login"
        
- **Resultado Esperado**: Redirecionamento para `/inventory.html`
    

---

####  Caso de Teste 1.2 – Login com dados incorretos

- **Objetivo**: Validar o comportamento do sistema ao usar credenciais inválidas.
    
- **Passos**:
    
    1. Acessar a URL
        
    2. Inserir usuário inválido e senha inválida
        
    3. Clicar em "Login"
        
- **Resultado Esperado**: Mensagem de erro visível
    

---

#### Caso de Teste 1.3 – Logout após login bem-sucedido

- **Objetivo**: Verificar se o usuário consegue fazer logout com sucesso.
    
- **Passos**:
    
    1. Fazer login válido
        
    2. Clicar no menu lateral
        
    3. Clicar em "Logout"
        
- **Resultado Esperado**: Retorno à página de login
    

---

###  **2. Produtos**

#### Caso de Teste 2.1 – Exibição da lista de produtos

- **Objetivo**: Verificar se a lista de produtos é exibida após o login.
    
- **Resultado Esperado**: Ao menos um produto visível na tela
    

---

####  Caso de Teste 2.2 – Visualização dos detalhes de um produto

- **Objetivo**: Garantir que os detalhes (nome, descrição, preço) de um produto possam ser vistos.
    
- **Passos**:
    
    1. Clicar sobre o nome de um produto
        
- **Resultado Esperado**: Página de detalhes com nome e preço visível
    

---

####  Caso de Teste 2.3 – Ordenação por nome

- **Objetivo**: Validar a ordenação alfabética dos produtos.
    
- **Passos**:
    
    1. Selecionar “Name (A to Z)” no menu de ordenação
        
- **Resultado Esperado**: Produtos exibidos em ordem alfabética crescente
    

---

####  Caso de Teste 2.4 – Ordenação por preço

- **Objetivo**: Verificar a ordenação dos produtos por menor preço.
    
- **Passos**:
    
    1. Selecionar “Price (low to high)”
        
- **Resultado Esperado**: Produtos exibidos do mais barato ao mais caro
    

---

###  **3. Carrinho de Compras**

####  Caso de Teste 3.1 – Adicionar produto ao carrinho

- **Objetivo**: Verificar se um produto pode ser adicionado ao carrinho.
    
- **Passos**:
    
    1. Clicar em “Add to cart” em um produto
        
- **Resultado Esperado**: Ícone do carrinho mostra quantidade “1”
    

---

####  Caso de Teste 3.2 – Remover produto do carrinho

- **Objetivo**: Verificar se o produto pode ser removido do carrinho.
    
- **Passos**:
    
    1. Adicionar produto
        
    2. Clicar em “Remove”
        
- **Resultado Esperado**: Carrinho volta para “vazio” (sem badge)
    

---

####  Caso de Teste 3.3 – Validar itens adicionados

- **Objetivo**: Garantir que os itens adicionados estão corretamente no carrinho.
    
- **Passos**:
    
    1. Adicionar dois produtos
        
    2. Acessar carrinho
        
- **Resultado Esperado**: Itens corretos listados no carrinho
    

---

###  **4. Checkout**

####  Caso de Teste 4.1 – Iniciar o processo de checkout

- **Objetivo**: Verificar se o botão de checkout funciona.
    
- **Passos**:
    
    1. Adicionar item ao carrinho
        
    2. Ir para o carrinho e clicar em “Checkout”
        
- **Resultado Esperado**: Redirecionado para a tela de informações pessoais
    

---

####  Caso de Teste 4.2 – Preencher dados obrigatórios

- **Objetivo**: Validar preenchimento de nome, sobrenome e CEP.
    
- **Resultado Esperado**: Botão “Continue” leva para resumo da compra
    

---

####  Caso de Teste 4.3 – Validar resumo da compra

- **Objetivo**: Verificar se o resumo mostra os itens e totais corretamente.
    
- **Resultado Esperado**: Lista de produtos, subtotal e total visíveis
    

---

####  Caso de Teste 4.4 – Finalizar a compra

- **Objetivo**: Garantir que o usuário pode concluir a compra.
    
- **Passos**:
    
    1. Preencher os dados
        
    2. Confirmar pedido
        
- **Resultado Esperado**: Exibição da mensagem "THANK YOU FOR YOUR ORDER"
