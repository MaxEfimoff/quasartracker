function setShow12HourTimeFormat(state, value) {
  state.settings.show12HourTimeFormat = value;
}

function setShowTasksInOneList(state, value) {
  state.settings.showTasksInOneList = value;
}

function setSettings(state, settings) {
  Object.assign(state.settings, settings);
}

export {
  setShow12HourTimeFormat, setShowTasksInOneList, setSettings,
}