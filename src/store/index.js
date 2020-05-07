/** @format */

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    user: {},
    token: '',
    info: {
      subject: '',
      duration: 0,
    },
    questions: [],
    testID: 0,
    responses: new Map(),
    feedback: {},
  },
  getters: {
    getCBTInfo: (state) => state.info,
    responses: (state) => state.responses,
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    getQuestions: (state) => state.questions,
    getCurrentTest: (state) => state.testID,
    getFeedback: (state) => state.feedback,
  },
  mutations: {
    setCBTInfo(state, info) {
      state.info = info
    },
    updateResponse(state, response) {
      state.responses.set(response.questionID, response.response)
    },
    setUserToken(state, token) {
      state.token = token
    },
    setUser(state, user) {
      state.user = user
    },
    setTestID(state, testID) {
      state.testID = testID
    },
    setQuestions(state, questions) {
      state.questions = questions
    },
    setFeedback(state, feedback) {
      state.feedback = feedback
    },
  },
  actions: {
    setCBTInfo(context, payload) {
      context.commit('setCBTInfo', payload)
    },
    updateResponse(context, payload) {
      context.commit('updateResponse', payload)
    },
    updateUser(context, payload) {
      context.commit('setUser', payload)
    },
    updateToken(context, payload) {
      context.commit('setUserToken', payload)
    },
    updateTestID(context, payload) {
      context.commit('setTestID', payload)
    },
    updateTestQuestions(context, payload) {
      context.commit('setQuestions', payload)
    },
    updateFeedback(context, payload) {
      context.commit('setFeedback', payload)
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
})
