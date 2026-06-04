<script setup>
// Define as props usando o script setup
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

// Define o emissor que vai enviar o livro clicado para o componente pai (ProductList)
const emit = defineEmits(['add-to-cart'])

// Função que é disparada ao clicar no botão de compra
const comprarLivro = () => {
  emit('add-to-cart', props.product)
}
</script>

<template>
  <div class="product-card">
    <!-- Renderiza a imagem usando o caminho mapeado no seu arquivo de dados -->
    <img :src="product.image" :alt="product.title" class="product-image" />
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-author">{{ product.autor }}</p>
    <p class="product-price">R$ {{ product.preco.toFixed(2) }}</p>

    <!-- Ao clicar aqui, a função comprarLivro é executada e joga o livro para o carrinho -->
    <button @click="comprarLivro" class="btn">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<style scoped>
</style>