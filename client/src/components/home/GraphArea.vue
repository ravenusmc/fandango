<template>
  <div>
    <section>

      <GraphCard
        :typeOne='typeOne'
        :data='averagesGraph'
        :options='chartOptionsOne'>
      </GraphCard>

      <GraphCard
        :typeOne='typeOne'
        :data='averagesGraphUser'
        :options='chartOptionsTwo'>
      </GraphCard>

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
        chartOptionsOne: {
        title: 'Average Movie Ratings (Professional)',
        legend: { position: 'bottom' },
        'height': 300,
        vAxis: { viewWindow: {
          min: 0
        }}
      },
      chartOptionsTwo: {
      title: 'Average Movie Ratings (User)',
      legend: { position: 'bottom' },
      'height': 300,
      vAxis: { viewWindow: {
        min: 0
      }}
    },
    }
  },
  components: {
    GraphCard,
  },
  computed: {
    ...mapGetters([
      'averagesGraph',
      'averagesGraphUser',
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
    grid-gap: 2em;
    margin-left: 10%;
    margin-right: 10%;
  }

@media only all and (max-width: 800px) {

  section {
    grid-template-columns: 1fr;
  }

}

</style>
