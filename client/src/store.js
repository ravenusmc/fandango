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

  },
  actions: {

    //This is the main action that will get the data for the firstStudy section.
    fireActions: ({ dispatch }) => {
      dispatch('fetchRottenTomatoeRatings')
    },

    //Get Rotten Tomatoe ratings
    fetchRottenTomatoeRatings: ({ commit }) => {
      console.log('FIRED!!')
    },

  },

  mutations: {

  },
});
