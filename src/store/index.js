import Vue from "vue";
import
axios
from "axios";
import Vuex from "vuex";
//import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    listMatchs: [],
    isHome: false
  },
  mutations: {
    updateData(state, data) {
      state.data = data
    },
    loadMatchs(state, id) {
      let matchData = [];
      for (const match of state.data) {
        if (match.competition.id == id) {
          matchData.push(match)
        }
      }
      state.listMatchs = matchData
    },

    changeIsHome(state, value) {
      //console.log('change home', value)
      state.isHome = value
    },

  },
  actions: {
    async getData({
      commit
    }) {
      try {
        const response = await axios.get('https://www.scorebat.com/video-api/v1/')
       // console.log(response.data)
        commit('updateData', response.data);
      } catch (error) {
       // console.log(error)

      }
    }

  },
  getters: {
    randomData(state) {
      let dataCard = [];
      if (state.data.length > 0) {
        for (let index = 0; index < 5; index++) {
          let randomNumber = Math.floor(Math.random() * state.data.length + 1);
          dataCard.push(state.data[randomNumber])
        }
      }
      return dataCard
    },
    competitionList(state) {
      let nameCompetition = [];
      let listCompetition = [];
      if (state.data.length > 0) {
        state.data.forEach((match) => {
          if (!nameCompetition.includes(match.competition.name)) {
            nameCompetition.push(match.competition.name)
            listCompetition.push(match.competition)
          }
        })
      }
      return listCompetition;
    }
  },
  modules: {},
});