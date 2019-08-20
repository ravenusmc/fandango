import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jsonp from 'jsonp';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    RottenTomatoesProfessional: 0,
    RottenTomatoesUser: 0,
    metaCriticProfessional: 0,
    metaCriticUser: 0,
    fandangoStarsAverage: 0,
    singleMovie: [],
    showSingleMovieSection: false,
    averagesGraph: {},
  },
  getters: {
    RottenTomatoesProfessional: state => state.RottenTomatoesProfessional,
    RottenTomatoesUser: state => state.RottenTomatoesUser,
    metaCriticProfessional: state => state.metaCriticProfessional,
    metaCriticUser: state => state.metaCriticUser,
    fandangoStarsAverage: state => state.fandangoStarsAverage,
    singleMovie: state => state.singleMovie,
    showSingleMovieSection: state => state.showSingleMovieSection,
    averagesGraph: state => state.averagesGraph,
  },
  actions: {

    //This is the main action that will get the data for the firstStudy section.
    fireActions: ({ dispatch }) => {
      dispatch('fetchRottenTomatoeRatings')
      dispatch('fetchMetaCriticRatings')
      dispatch('fetchFandangoRatings')
    },

    //This action will build the graphs.
    buildGraphs: ({ dispatch }) => {
      console.log('Fired!')
    },

    //Get Rotten Tomatoe ratings
    fetchRottenTomatoeRatings: ({ commit }) => {
      const path = 'http://localhost:5000/getRottenTomatoeAverages';
      axios.get(path)
      .then((res) => {
        const professional_mean = res.data[0]
        const user_mean = res.data[1]
        commit('setRottenTomatoeProfessional' ,professional_mean)
        commit('setRottenTomatoeUser', user_mean)
      })
    },

    //This action will fetch the metacritic average ratings
    fetchMetaCriticRatings: ({ commit }) => {
      const path = 'http://localhost:5000/getMetaCriticScores';
      axios.get(path)
      .then((res) => {
        const professional_mean = res.data[0]
        const user_mean = res.data[1]
        commit('setMetaCriticProfessional' ,professional_mean)
        commit('setMetaCriticUser', user_mean)
      })
    },

    //This action will fetch the fandango average star rating
    fetchFandangoRatings: ({ commit }) => {
      const path = 'http://localhost:5000/getFandangoScores';
      axios.get(path)
      .then((res) => {
        commit('setFandangoAverage', res.data)
      })
    },

    //This action gets information off of one movie
    fetchSingleMovieRatings: ({ commit }, {payload}) => {
      const path = 'http://localhost:5000/singleMovieRating';
      axios.post(path, payload)
      .then((res) => {
        const show = payload.show
        console.log(show)
        commit('setSingleMovieRatings', res.data)
        commit('setShowSingleMovieSection', show)
      })
    }

  },

  mutations: {
    setRottenTomatoeProfessional(state, data) {
      state.RottenTomatoesProfessional = data;
    },
    setRottenTomatoeUser(state, data) {
      state.RottenTomatoesUser = data;
    },
    setMetaCriticProfessional(state, data) {
      state.metaCriticProfessional = data;
    },
    setMetaCriticUser(state, data) {
      state.metaCriticUser = data;
    },
    setFandangoAverage(state, data) {
      state.fandangoStarsAverage = data;
    },
    setSingleMovieRatings(state, data){
      state.singleMovie = data;
    },
    setShowSingleMovieSection(state, data){
      state.showSingleMovieSection = data;
    }
  },
});
