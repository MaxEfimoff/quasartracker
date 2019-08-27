import { LocalStorage } from "quasar";

function setShow12HourTimeFormat({ commit, dispatch }, value) {
  commit("setShow12HourTimeFormat", value);
  dispatch("saveSettings");
}

function setShowTasksInOneList({ commit, dispatch }, value) {
  commit("setShowTasksInOneList", value);
  dispatch("saveSettings");
}

function saveSettings({ state }) {
  LocalStorage.set("settings", state.settings);
}

function getSettings({ commit }) {
  let settings = LocalStorage.getItem("settings");
  if (settings) {
    commit("setSettings", settings);
  }
}

export {
  setShow12HourTimeFormat, setShowTasksInOneList, saveSettings, getSettings,
}