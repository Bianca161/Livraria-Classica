<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <h1>Item do Carrinho</h1>

   <div class="cart-item">
    <div class="product-info">
      <img :src="item.imagem" :alt="item.titulo" class="item-imagem" />
      <div class="text-details">
        <h3 class="item-titulo">{{ item.titulo }}</h3>
        <p class="item-autor">{{ item.autor }}</p>
        <p class="item-preco">R$ {{ item.preco.toFixed(2) }}</p>
      </div>
    </div>
    
    <div class="quantity-selector">
      <button class="qty-btn" @click="$emit('decrease-qty', item)">-</button>
      <span class="qty-value">{{ item.quantidade }}</span>
      <button class="qty-btn" @click="$emit('increase-qty', item)">+</button>
    </div>
    
    <div class="item-subtotal">
      R$ {{ (item.preco * item.quantidade).toFixed(2) }}
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 2;
}

.item-imagem {
  width: 60px;
  height: 80px;
  object-fit: contain;
}

.text-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-titulo {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.item-autor {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}

.item-preco {
  font-size: 0.9rem;
  color: #333;
  margin: 0;
}

.quantity-selector {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.qty-btn {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
}

.qty-btn:hover {
  background-color: #e8e8e8;
}

.qty-value {
  font-weight: 600;
  font-size: 1rem;
  min-width: 20px;
  text-align: center;
}

.item-subtotal {
  flex: 1;
  text-align: right;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}
</style>
