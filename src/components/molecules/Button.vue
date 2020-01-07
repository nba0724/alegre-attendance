<template>
  <v-btn dark :block="imte.block" :color="item.color">
    <v-icon>{{ item.icon }}</v-icon
    >{{ item.name }}</v-btn
  >
</template>

<scriptt>
export default {
  name: "buton",
  props: ["item"],
  methods: {
    
  }
};
</scriptt>
