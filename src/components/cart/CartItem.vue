<script setup>
// Define as props recebidas usando a nova sintaxe
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

// Define os emissores de eventos para alterar as quantidades
const emit = defineEmits(['decrease-qty', 'increase-qty'])
</script>

<template>
  <div class="cart-item">
    <!-- Informações do produto (Imagem, Título, Autor, Preço) -->
    <div class="product-info">
      <img :src="item.image" :alt="item.title" class="item-capa" />
      <div class="text-details">
        <h3 class="item-titulo">{{ item.title }}</h3>
        <p class="item-autor">{{ item.autor }}</p>
        <p class="item-preco">R${{ item.preco.toFixed(2).replace('.', ',') }}</p>
      </div>
    </div>
    
    <!-- Seletor de Quantidade encapsulado como no Figma -->
    <div class="quantity-container">
      <div class="quantity-selector">
        <button class="qty-btn" @click="emit('decrease-qty', item)">-</button>
        <span class="qty-value">{{ item.quantidade }}</span>
        <button class="qty-btn" @click="emit('increase-qty', item)">+</button>
      </div>
    </div>
    
    <!-- Subtotal do item específico -->
    <div class="item-subtotal">
      R${{ (item.preco * item.quantidade).toFixed(2).replace('.', ',') }}
    </div>
  </div>
</template>


<style scoped>

</style>