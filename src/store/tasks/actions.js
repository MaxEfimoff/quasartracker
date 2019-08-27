import { uid } from "quasar";

function updateTask({ commit }, payload) {
  commit("updateTask", payload);
}

function deleteTask({ commit }, id) {
  commit("deleteTask", id);
}

function addTask({ commit }, task) {
  let taskId = uid();
  let payload = {
    id: taskId,
    task: task
  };
  commit("addTask", payload);
}

function setSearch({ commit }, value) {
  commit("setSearch", value);
}

function setSort({ commit }, value) {
  commit("setSort", value);
}

export {
  updateTask, deleteTask, addTask, setSearch, setSort,
}