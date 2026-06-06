<script>
</script>
<template>
  <section class="hero">
    <div class="hero-content">
      <h3 class="outlined">Livro destaque</h3>
      <h2>Memórias Póstumas de Brás Cubas </h2>
      <p>
        Neste clássico de Machado de Assis, acompanhe as reflexões irônicas e provocativas de Brás Cubas, um narrador
        que decide contar sua história após a morte. Entre críticas à sociedade, amores, ambições e desilusões, Memórias
        Póstumas de Brás Cubas revela, com inteligência e humor marcantes, um retrato profundo da humanidade e se
        consagra como uma das obras mais importantes da literatura brasileira.
      </p>
      <button>Acessar página do livro</button>
    </div>
    <div class="hero-image">
      <img src="/public/booksImgs/memoriasCubas.png" alt="Hero Image" />
    </div>
  </section>
</template>
<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 3vw;

  & h2 {
    color: #6F363A;
    font-size: 3rem;
    font-weight: 700;
  }

  & .hero-content {
    width: 50%;
    padding-right: 20px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    & h3.outlined {
      background-color: transparent;
      color: #6F363A;
      border: 2px solid #6F363A;
      padding: 15px 10px;
      border-radius: 5px;
      font-size: 1rem;
    }

    p {
      width: 100%;
    }

    & button {
      background-color: transparent;
      border: 2px solid #6F363A;
      color: #6F363A;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1rem;
      transition: all 0.3s ease;

    }

    & button:hover {
      background-color: #6F363A;
      color: #ede2cf;
    }
  }

  & .hero-image {
    width: 50%;
    text-align: right;
    padding-right: 4vw;

    & img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
