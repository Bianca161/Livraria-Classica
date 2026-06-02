<script setup>
import ProductCard from './ProductCard.vue'
import {products} from '../../data/products.js'
</script>

<template>
  <h1>Catálogo de Livros</h1>

  <div class="product-list">
    <ProductCard 
      v-for="item in products" 
      :key="item.id" 
      :product="item"
      @add-to-cart="$emit('add-to-cart', item)"
    />
  </div>
</template>

<style scoped>
</style>
