<script setup>

const props = defineProps({
  totalProdutos: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <aside class="cart-summary">
    <h2 class="summary-title">Total da compra</h2>
    
    <div class="summary-row">
      <span>produtos:</span>

      <span>R${{ totalProdutos.toFixed(2) }}</span>
    </div>
    
    <div class="summary-row border-bottom">
      <span>Frete:</span>
      <span class="frete-gratis">Grátis</span>
    </div>
    
    <div class="summary-row total-row">
      <span>Total:</span>
      <strong>R${{ totalProdutos.toFixed(2) }}</strong>
    </div>

    <button class="btn-checkout">Ir para pagamento</button>
  </aside>
</template>

<style scoped>

</style>