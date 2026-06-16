// Array que vai guardar os itens do pedido
let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Adiciona o produto ao array do carrinho
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    
    // Atualiza o valor total somando o novo preço
    total += precoProduto;
    
    // Renderiza as mudanças na tela
    atualizarInterfaceCarrinho();
}

function atualizarInterfaceCarrinho() {
    const listaCarrinho = document.getElementById('itens-carrinho');
    const elementoTotal = document.getElementById('valor-total');
    
    // Limpa a lista antes de redesenhar
    listaCarrinho.innerHTML = '';
    
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<li class="vazio">Nenhum item selecionado</li>';
    } else {
        // Percorre o carrinho e cria a linha de cada item
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.nome}</span> <strong>R$ ${item.preco.toFixed(2).replace('.', ',')}</strong>`;
            listaCarrinho.appendChild(li);
        });
    }
    
    // Atualiza o texto do total formatado em Real
    elementoTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Adicione alguma delícia antes de finalizar. ☕");
        return;
    }
    
    // Mensagem de sucesso simples
    alert(`Pedido confirmado!\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\nObrigado pela preferência! 🎉`);
    
    // Reseta o sistema após finalizar
    carrinho = [];
    total = 0;
    atualizarInterfaceCarrinho();
}