<script setup>
const props = defineProps({
  totalProdutos: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <h1>Resumo do Carrinho</h1>

  <div class="cart-summary">
    <h2 class="summary-title">Total da Compra</h2>

    <div class="summary-row">
      <span>Produtos:</span>
      <span>R$ {{ totalProdutos.toFixed(2) }}</span>
    </div>

    <div class="summary-row border-bottom">
      <span>Frete:</span>
      <span class="frete-gratis">Grátis</span>
    </div>

    <div class="summary-row total-row">
      <span>Total:</span>
      <strong>R$ {{ totalProdutos.toFixed(2) }}</strong>
    </div>

    <button class="btn-checkout">Ir para o pagamento</button>
  </div>
</template>

<style scoped>
.cart-summary {
  flex: 1;
  border: 1px solid #eef0f2;
  padding: 24px;
  background-color: #f9f9f9; /* Fundo acinzentado suave igual ao print */
  border-radius: 8px;
}

.summary-title {
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 700;
  color: #333;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #555;
}

.border-bottom {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 16px;
  margin-bottom: 16px;
}

.total-row {
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
}

.frete-gratis {
  color: #2ec4b6; /* Tom esverdeado/azul para o Grátis */
  font-weight: 600;
}

/* Botão verde escuro de finalização */
.btn-checkout {
  width: 100%;
  background-color: #1a4330; /* Verde escuro institucional da imagem */
  color: white;
  border: none;
  padding: 12px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 0.95rem;
  transition: background-color 0.2s;
}

.btn-checkout:hover {
  background-color: #133224;
}
</style>
