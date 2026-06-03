<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['decrease-qty', 'increase-qty'])
</script>

<template>
  <div class="cart-item">

    <div class="product-info">
      <img :src="item.image" :alt="item.title" class="item-capa" />

      <div class="text-details">
        <h3 class="item-titulo">{{ item.title }}</h3>
        <p class="item-autor">{{ item.autor }}</p>
        <p class="item-preco">R${{ item.preco.toFixed(2) }}</p>
      </div>
    </div>
    
    <div class="quantity-container">

      <div class="quantity-selector">
        <button class="qty-btn" @click="emit('decrease-qty', item)">-</button>
        <span class="qty-value">{{ item.quantidade }}</span>
        <button class="qty-btn" @click="emit('increase-qty', item)">+</button>
      </div>
    </div>
    
    <div class="item-subtotal">
      R${{ (item.preco * item.quantidade).toFixed(2) }}
    </div>
  </div>
</template>

<style scoped>

</style>