<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

const handleSearch = () => {
  console.log('Pesquisando por:', searchQuery.value)
}

const navigation = [
  { label: 'segurança', href: '#' },
  { label: 'sobre nós', href: '#' },
  { label: 'Envio', href: '#' },
  { label: 'compras', href: '#' }
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
          <button @click="handleSearch" class="search-button">
            🔍
          </button>
        </div>
      </div>

      <!-- Navigation & Icons -->
      <nav class="nav-section">
        <ul class="nav-menu">
          <li v-for="item in navigation" :key="item.label">
            <a :href="item.href" class="nav-link">{{ item.label }}</a>
          </li>
        </ul>

        <!-- Icons -->
        <div class="icons-group">
          <button class="icon-button" title="Segurança">
            🛡️
          </button>
          <button class="icon-button" title="Favoritos">
            ⭐
          </button>
          <button class="icon-button" title="Carrinho">
            🛒
          </button>
          <button class="icon-button" title="Login">
            👤
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #f5e6d3;
  border-bottom: 1px solid #d4a574;
  position: sticky;
  top: 0;
  z-index: 100;
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
}

.search-wrapper {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
  flex: 1;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  outline: none;
}

.search-input::placeholder {
  color: #999;
}

.search-button {
  background-color: white;
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #f0f0f0;
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
  color: #4a4a4a;
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
  gap: 1rem;
  align-items: center;
}

.icon-button {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: transform 0.3s;
  padding: 0.5rem;
}

.icon-button:hover {
  transform: scale(1.1);
}

/* Responsive Design */
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

