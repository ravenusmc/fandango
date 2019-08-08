<template>
  <div>

    <section>

      <div class='pictureTwo'>
      </div>

      <div>
        <div>
          <h3 class='center'>Basic review of the Data</h3>
          <div>
            <p>Rotten Tomatoes Average Rating (Professional): {{ RottenTomatoesProfessional }} out of 100.</p>
            <p>Rotten Tomatoes Average Rating (User): {{ RottenTomatoesUser}} out of 100.</p>
            <p>Metacritic Average Rating (Professional): {{ metaCriticProfessional }} out of 100.</p>
            <p>Metacritic Average Rating (User): {{ metaCriticUser }} out of 10.</p>
            <p>Fandango Stars Average: {{ fandangoStarsAverage }} out of 5.</p>
          </div>
        </div>
        <MovieSelect/>
      </div>

    </section>

  </div>
</template>

<script>
import MovieSelect from '@/components/home/MovieSelect.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: "FirstStudy",
  components: {
    MovieSelect,
  },
  computed: {
    ...mapGetters([
    'RottenTomatoesProfessional',
    'RottenTomatoesUser',
    'metaCriticProfessional',
    'metaCriticUser',
    'fandangoStarsAverage',
    ]),
  },
  methods: {
  ...mapActions([
      'fireActions',
    ]),
  },
  created() {
      this.fireActions()
  },
}
</script>

<style scoped>

.center {
  text-align: center;
}

section {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-left: 5%;
  margin-right: 5%;
}

.pictureTwo {
  height: 500px;
  background-image: url('~@/assets/picture_two.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media only all and (max-width: 900px){

  section {
    grid-template-columns: 1fr;
  }

}
</style>
