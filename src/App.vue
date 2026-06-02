<script setup>
import { ref, computed } from 'vue'
import ProductList from './components/products/ProductList.vue'
import CartPanel from './components/cart/CartPanel.vue'

const currentScreen = ref('vitrine')
const mockCart = ref([
  {
    id: 1,
    image: '/booksImgs/domCasmurro.png',
    title: 'Dom Casmurro',
    autor: 'Machado de Assis',
    preco: 24.9,
  },
  {
    id: 2,
    image: '/booksImgs/vidasSecas.png',
    title: 'Vidas Secas',
    autor: 'Graciliano Ramos',
    preco: 19.9,
  },
])

const calculateTotal = computed(() =>
  mockCart.value.reduce((acc, item) => acc + item.preco * item.quantidade, 0),
)

function addQuantity(item) {
  item.quantidade++
}

function removeQuantity(item) {
  if (item.quantidade > 1) {
    item.quantidade--
  }
}
</script>

<template>
  <div id="app">
    <nav class="test-navigation">
      <button :class="{ active: currentScreen === 'vitrine' }" @click="currentScreen = 'vitrine'">
        Ver Vitrine (ProductList)
      </button>
      <button :class="{ active: currentScreen === 'carrinho' }" @click="currentScreen = 'carrinho'">
        Ver Carrinho (CartPanel)
      </button>
    </nav>

    <main class="main-content">
      <ProductList v-if="currentScreen === 'vitrine'" />

      <CartPanel
        v-else
        :cart-items="mockCart"
        :cart-total="calculateTotal"
        @increase-qty="addQuantity"
        @decrease-qty="removeQuantity"
      />
    </main>
  </div>
</template>

<style scoped>
.test-navigation {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button.active {
  font-weight: bold;
}
</style>
