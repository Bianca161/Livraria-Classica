<script setup>
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

const props = defineProps({
  cartItems: {
    type: Array,
    required: true,
  },
  cartTotal: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <h1>Painel do Carrinho</h1>

  <div class="cart-page">
    <h1 class="cart-title">Carrinho de Compras</h1>

    <div class="cart-container">
      <div class="cart-main">
        <div class="cart-header">
          <span class="header-titulo">Título</span>
          <span class="header-quantidade">Quantidade</span>
          <span class="header-subtotal">Subtotal</span>
        </div>

        <div class="cart-items">
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            @increase-qty="$emit('increase-qty', item)"
            @decrease-qty="$emit('decrease-qty', item)"
          />
        </div>

        <button class="btn-back">Voltar para loja</button>

        <div class="coupon-section">
          <input type="text" placeholder="Código do cupom" class="coupon-input" />
          <button class="btn-coupon">Inserir Cupom</button>
        </div>
      </div>

      <CartSummary :totalProdutos="cartTotal" />
    </div>
  </div>
</template>

<style scoped></style>
