<template>
  <div>

    <header>
      <div class='headerTitle'>
        <h1>The Fandango Project</h1>
      </div>
    </header>

  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>

header {
  height: 500px;
  background-image: url('~@/assets/movie.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.headerTitle {
  color: white;
  text-transform: uppercase;
  font-family: 'Roboto Mono', monospace;
}



</style>
