<template>
  <q-page padding>
    <q-item-label header>Settings</q-item-label>

    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Show 12 hour format</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-toggle color="blue" v-model="show12HourTimeFormat" />
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Show tasks in one list</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-toggle color="blue" v-model="showTasksInOneList" />
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(value) {
        this.setShow12HourTimeFormat(value);
      }
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList;
      },
      set(value) {
        this.setShowTasksInOneList(value);
      }
    }
  },
  methods: {
    ...mapActions("settings", [
      "setShow12HourTimeFormat",
      "setShowTasksInOneList"
    ])
  }
};
</script>

<style>
</style>
