<template>
  <div>
    <section>
      <GraphCard/>
    </section>
  </div>
</template>

<script>
import GraphCard from '@/components/home/GraphCard.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: "GraphArea",
  data(){
    return {
      typeOne: "BarChart",
    }
  },
  components: {
    GraphCard,
  },
  computed: {
    ...mapGetters([
      'averagesGraph',
    ]),
  },
  methods: {
  ...mapActions([
      'buildGraphs',
    ]),
  },
  mounted() {
    this.buildGraphs()
  },
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
