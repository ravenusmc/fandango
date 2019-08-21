<template>
  <div>

    <section>
      <div>
        <h3 class='center font'>Summary</h3>
      </div>

      <div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Summary"
}
</script>

<style scoped>
.center {
  text-align: center;
}

.font {
  font-family: 'Roboto Mono', monospace;
}

section {
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
