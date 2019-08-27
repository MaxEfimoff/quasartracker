<template>
  <q-page>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey q-mt-xl"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="Login" label="Login" />
        <q-tab name="Register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Login">
          <login />
        </q-tab-panel>

        <q-tab-panel name="Register">
          <register />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "Login"
    };
  },
  components: {
    register: require("components/Auth/Register.vue").default,
    login: require("components/Auth/Login.vue").default
  }
};
</script>

<style>
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
}
</style>
