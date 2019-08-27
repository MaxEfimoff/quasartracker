<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[
      val => !!val || 'Field is required',
      ]"
      autofocus
      ref="name"
      label="Task name"
      class="col"
      v-select-all
    >
      <template v-slot:append>
        <q-icon v-if="name" @click="$emit('update:name', '')" name="close" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";

export default {
  props: ["name"],
  directives: {
    selectAll
  }
};
</script>