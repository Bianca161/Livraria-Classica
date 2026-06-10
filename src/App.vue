<script setup>
import { ref } from 'vue'
import ProductCard from './components/ products/ProductCard.vue'
import ProductList from './components/ products/ProductList.vue'
import CartItem from './components/cart/CartItem.vue'
import CartPanel from './components/cart/CartPanel.vue'
import CartSummary from './components/cart/CartSummary.vue'

const searchQuery = ref('')

const handleSearch = () => {
  console.log('Pesquisando por:', searchQuery.value)
}

const navigation = [
  { label: 'segurança', href: '#' },
  { label: 'sobre nós', href: '#' },
  { label: 'Envio', href: '#' },
  { label: 'compras', href: '#' },
]
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo-section">
        <img src="/logo.png" alt="Livraria Classica Logo" class="logo" />
      </div>

      <div class="search-section">
        <div class="search-wrapper">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Pesquisar"
            class="search-input"
            @keyup.enter="handleSearch"
          />
          <button @click="handleSearch" class="search-button" title="Lupa"><i class="mdi mdi-magnify"></i></button>
        </div>
      </div>

      <nav class="nav-section">
        <ul class="nav-menu">
          <li v-for="item in navigation" :key="item.label">
            <a :href="item.href" class="nav-link">{{ item.label }}</a>
          </li>
        </ul>

        <div class="icons-group">
          <div class="icon-separator"></div>
          <button class="icon-button" title="Favoritos"><i class="mdi mdi-star"></i></button>
          <button class="icon-button" title="Carrinho"><i class="mdi mdi-cart-outline"></i></button>
          <button class="icon-button" title="Login"><i class="mdi mdi-account"></i></button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #f5e6d3;
  border-bottom: 1px solid #d4a574;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  gap: 2rem;
}

.logo-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo {
  height: 60px;
  width: auto;
}

.search-section {
  flex: 1;
  min-width: 200px;
  width: 100%;
}

.search-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #e7d6bb;
  border-radius: 12px;
  overflow: hidden;
  padding: 0.2rem;
  box-shadow: inset 0 0 0 1px rgba(55, 32, 16, 0.1);
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 0.9rem 1rem;
  font-size: 0.95rem;
  color: #372010;
  outline: none;
}

.search-input::placeholder {
  color: #7d6347;
}

.search-button {
  background: transparent;
  border: none;
  border-left: 1px solid rgba(55, 32, 16, 0.12);
  color: #372010;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.45rem;
  transition:
    background-color 0.2s,
    transform 0.2s;
}

.search-button:hover {
  background-color: rgba(55, 32, 16, 0.08);
  transform: scale(1.05);
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #372010;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s;
  text-transform: lowercase;
}

.nav-link:hover {
  color: #8b5a3c;
}

.icons-group {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.icon-button {
  background-color: #f3e6d2;
  border: 1px solid rgba(55, 32, 16, 0.12);
  border-radius: 10px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition:
    transform 0.2s,
    background-color 0.2s,
    border-color 0.2s;
  padding: 0;
}

.icon-button:hover {
  transform: scale(1.05);
  background-color: rgba(55, 32, 16, 0.08);
  border-color: rgba(55, 32, 16, 0.2);
}

.icon-separator {
  width: 1px;
  height: 24px;
  background-color: rgba(55, 32, 16, 0.2);
  margin: 0 0.5rem;
}

@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
    padding: 1rem;
    gap: 1rem;
  }

  .search-section {
    order: 3;
    flex-basis: 100%;
  }

  .nav-menu {
    gap: 1rem;
    font-size: 0.85rem;
  }

  .nav-section {
    gap: 1rem;
  }

  .logo {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .nav-menu {
    display: none;
  }

  .header-container {
    padding: 0.75rem;
  }

  .logo {
    height: 40px;
  }
}
</style>
