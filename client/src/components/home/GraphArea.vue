<template>
  <div>
    <section>
      <GraphCard/>
    </section>
  </div>
</template>

<script>
import GraphCard from '@/components/home/GraphCard.vue';

export default {
  name: "GraphArea",
  components: {
    GraphCard,
  }
}
</script>

<style scoped>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 2px solid black;
    margin-left: 10%;
    margin-right: 10%;
  }
</style>
