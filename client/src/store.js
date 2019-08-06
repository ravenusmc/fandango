import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jsonp from 'jsonp';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    RottenTomatoesProfessional: 0,
    RottenTomatoesUser: 0,
  },
  getters: {
    RottenTomatoesProfessional: state => state.RottenTomatoesProfessional,
    RottenTomatoesUser: state => state.RottenTomatoesUser,
  },
  actions: {

    //This is the main action that will get the data for the firstStudy section.
    fireActions: ({ dispatch }) => {
      dispatch('fetchRottenTomatoeRatings')
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

  },

  mutations: {
    setRottenTomatoeProfessional(state, data) {
      state.RottenTomatoesProfessional = data;
    },
    setRottenTomatoeUser(state, data) {
      state.RottenTomatoesUser = data;
    },
  },
});
