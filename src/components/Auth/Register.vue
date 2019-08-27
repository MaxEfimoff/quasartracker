<template>
  <form @submit.prevent="submitForm">
    <div class="q-gutter-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Register to access to your Quasar Tracker anywhere!
      </q-banner>
      <q-input
        outlined
        v-model="formData.email"
        label="E-mail"
        class="col"
        ref="email"
        :rules="[
          val => !!val || 'Field is required',
          val => isValidEmailAddress(val) || 'Please enter a valid e-mail address'
          ]"
        lazy-rules
      />
      <q-input
        ref="password"
        outlined
        v-model="formData.password"
        label="Password"
        class="col"
        :type="hidePassword ? 'password' : 'text'"
        :rules="[
          val => !!val || 'Field is required',
          val => val.length >= 6 || 'Please use minimum 6 characters'
          ]"
        lazy-rules
      >
        <template v-slot:append>
          <q-icon
            :name="hidePassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="hidePassword = !hidePassword"
          />
        </template>
      </q-input>
      <q-input
        ref="password2"
        outlined
        v-model="formData.password2"
        label="Confirm password"
        class="col"
        :type="hidePassword2 ? 'password' : 'text'"
        :rules="[
          val => !!val || 'Field is required',
          val => isPasswordsMatch(val) || 'Please be sure your passwords match'
          ]"
        lazy-rules
      >
        <template v-slot:append>
          <q-icon
            :name="hidePassword2 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="hidePassword2 = !hidePassword2"
          />
        </template>
      </q-input>
    </div>
    <div class="row">
      <q-space />
      <q-btn color="primary" label="Register" type="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        password2: ""
      },
      hidePassword: true,
      hidePassword2: true,
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    isPasswordsMatch(password2) {
      if (this.$refs.password.value === password2) {
        return true;
      }
    },
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      this.$refs.password2.validate();
      if (
        !this.$refs.email.hasError &&
        !this.$refs.password.hasError &&
        !this.$refs.password2.hasError
      ) {
        this.registerUser(this.formData);
      }
    }
  }
};
</script>

<style>
</style>
