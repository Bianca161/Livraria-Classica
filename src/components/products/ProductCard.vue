<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['add-to-cart'])

const comprarLivro = () => {
  emit('add-to-cart', props.product)
}
</script>

<template>
  <div class="product-card">

    <img :src="product.image" :alt="product.title" class="product-image" />
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-author">{{ product.autor }}</p>
    <p class="product-price">R$ {{ product.preco.toFixed(2) }}</p>

    <button @click="comprarLivro" class="btn">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<style scoped>
.product-card {
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); 
}

.product-image {
  max-width: 100%;
  height: 220px; 
  object-fit: contain;
  margin-bottom: 15px;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  min-height: 40px; 
}

.product-author {
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 15px 0;
}

.product-price {
  font-weight: bold;
  font-size: 1.1rem;
  color: #532222; 
  margin-bottom: 15px;
}

.btn {
  background-color: #693339;
  color: #ede2cf; 
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  margin-top: auto;
}

.btn:hover {
  background-color: #54282d; 
}
</style>