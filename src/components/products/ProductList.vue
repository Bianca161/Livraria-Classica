<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
// CORREÇÃO DO CAMINHO: Agora voltando os níveis corretos de pastas baseados no seu projeto
import { books } from '../../data/products.js'

const bookList = ref(books)

// Declara que este componente envia o evento de adicionar para o App.vue
const emit = defineEmits(['add-to-cart'])

const handleAddToCart = (product) => {
  // Repassa o produto coletado do card diretamente para o pai (App.vue)
  emit('add-to-cart', product)
}
</script>

<template>
  <div class="product-list-container">
    <h2 class="store-title">Nosso Catálogo de Livros</h2>

    <!-- Grid organizada para exibir os livros lado a lado -->
    <div class="products-grid">
      <ProductCard
        v-for="item in bookList"
        :key="item.id"
        :product="item"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
