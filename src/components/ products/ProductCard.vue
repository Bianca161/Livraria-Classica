<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <h1>Card de Produto</h1>

  <div class="product-card">
    <img :src="product.imagem" :alt="product.titulo" class="product-image" />
    <h3 class="product-title">{{ product.titulo }}</h3>
    <p class="product-author">{{ product.autor }}</p>
    <p class="product-price">R$ {{ product.preco.toFixed(2) }}</p>

    <button @click="$emit('add-to-cart', product)" class="btn btn">Adicionar ao Carrinho</button>
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
  /* Removeu a borda cinza para ficar limpo como na foto */
}

.product-image {
  max-width: 100%;
  height: 220px; /* Deixa as capas com tamanho alinhado */
  object-fit: contain;
  margin-bottom: 15px;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  min-height: 40px; /* Garante que títulos grandes não desalitem o card */
}

.product-author {
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 8px 0;
}

.product-description {
  font-size: 0.8rem;
  color: #888;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a resenha a duas linhas para não quebrar o layout */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 15px;
}

/* Botão cinza claro idêntico ao da imagem */
.btn {
  background-color: #f0f0f0;
  color: #333;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  margin-top: auto;
}

.btn:hover {
  background-color: #e0e0e0; /* Efeito sutil ao passar o mouse */
}
</style>
