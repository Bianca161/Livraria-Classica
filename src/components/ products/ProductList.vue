<script setup>
</script>


<template>
  <h1>Literatura Clássica</h1>
  <ul>
    <li  v-for="book in books" :key="book.id">

      <img :src="book.image" alt="book.title">
      <h2>{{ book.title }}</h2>
      <p>{{ book.autor }}</p>
      <p class="preco">R$ {{ book.preco.toFixed(2)   }}</p>

      <button>
        <i class="mdi mdi-cart-outline"></i> Adicionar ao Carrinho</button>
    </li>
  </ul>

</template>

<style scoped>
ul{
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;

  & li{
    list-style: none;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    text-align: left;
    & h2{
      font-size: 1.2rem;
      margin: 10px 0;
      font-weight: bold;
      color: #6F363A;
    }
    & .preco{
      font-size: 1.2rem;
      margin: 5px 0;
      font-weight: bold;
      color: #6F363A;
    }
    & img{
      width: 100%;
      height: auto;
      margin-top: 10px;
    }
    & button{
      background-color: #6F363A;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 5px;
      
    }

  }
}
</style>
