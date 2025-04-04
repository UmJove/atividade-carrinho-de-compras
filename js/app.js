let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML= '';
let valorTotal = document.getElementById('valor-total');
let total = 0;
valorTotal.innerText = `R$ ${total}`;

function adicionar() {
    //recuperar nome, preço e quantidade do produto selecionado
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    //calcular subtotal de cada produto
    let subtotal = quantidade * precoProduto;

    //adicionar produto ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`

    // atualizar total do produto
    total = total + subtotal;
    valorTotal.innerText = `R$ ${total}`;
    document.getElementById('quantidade').value = '';


console.log('confirma4')

}
   
function limpar() {
    total = 0;
    valorTotal.innerText = `R$ ${total}`;
    carrinho.innerHTML = '';
}