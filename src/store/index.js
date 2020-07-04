/** @format */

import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    user: {},
    student: {},
    token: "",
    info: {
      subject: "",
      duration: 0,
    },
    questions: [],
    testID: 0,
    elapsed: 0,
    responses: new Map(),
    feedback: {},
    schedule: [],
  },
  getters: {
    getCBTInfo: (state) => state.info,
    responses: (state) => state.responses,
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    getStudent: (state) => state.student,
    getQuestions: (state) => state.questions,
    getCurrentTest: (state) => state.testID,
    getFeedback: (state) => state.feedback,
    getElapsedTime: (state) => state.elapsed,
  },
  mutations: {
    setCBTInfo(state, info) {
      state.info = info;
    },
    updateResponse(state, response) {
      state.responses.set(response.questionID, response.response);
    },
    setUserToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setStudent(state, student) {
      state.student = student;
    },
    setTestID(state, testID) {
      state.testID = testID;
      state.responses = new Map();
    },
    setElapsed(state, elapsed) {
      state.elapsed = elapsed;
    },
    setQuestions(state, questions) {
      state.questions = questions;
    },
    setFeedback(state, feedback) {
      state.feedback = feedback;
    },
    setSchedule(state, schedule) {
      state.schedule = schedule;
    },
  },
  actions: {
    setCBTInfo(context, payload) {
      context.commit("setCBTInfo", payload);
    },
    updateResponse(context, payload) {
      context.commit("updateResponse", payload);
    },
    updateUser(context, payload) {
      context.commit("setUser", payload);
    },
    updateStudent(context, payload) {
      context.commit("setStudent", payload);
    },
    updateToken(context, payload) {
      context.commit("setUserToken", payload);
    },
    updateTestID(context, payload) {
      context.commit("setTestID", payload);
    },
    updateTestQuestions(context, payload) {
      context.commit("setQuestions", payload);
    },
    updateFeedback(context, payload) {
      context.commit("setFeedback", payload);
    },
    updateSchedule(context, payload) {
      context.commit("setSchedule", payload);
    },
    updateElapsed(context, payload) {
      context.commit("setElapsed", payload);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
