<script setup>
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

const props = defineProps({
  cartItems: {
    type: Array,
    required: true
  },
  cartTotal: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['increase-qty', 'decrease-qty', 'go-to-store'])
</script>

<template>
  <div class="cart-page">
    <div class="cart-wrapper">
      <h1 class="cart-title">Carrinho</h1>

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
              @increase-qty="emit('increase-qty', item)"
              @decrease-qty="emit('decrease-qty', item)"
            />
          </div>

          <div class="cart-footer-actions">
            <button class="btn-back" @click="emit('go-to-store')">
              voltar a loja
            </button>

            <div class="coupon-section">
              <input type="text" placeholder="codigo de cumpom" class="coupon-input" />
              <button class="btn-coupon">inserir cupom</button>
            </div>
          </div>
        </div>

        <CartSummary :totalProdutos="cartTotal" />

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>