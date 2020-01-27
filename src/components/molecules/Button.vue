<template>
  <v-btn :color="item.color" :block="item.block" dark @click="clickEvent()">
    <v-icon v-if="item.icon !== ''">{{ item.icon }}</v-icon>
    {{ item.name }}
  </v-btn>
</template>

<script>
export default {
  name: "buton",
  props: ["item"],
  methods: {
    clickEvent() {
      this.$emit("button-click");
    }
  }
};
</script>
