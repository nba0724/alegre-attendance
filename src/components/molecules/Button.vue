<template>
  <v-btn :color="item.color" dark>
    <v-icon>{{ item.icon }}</v-icon
    >{{ item.name }}</v-btn
  >
</template>

<script>
export default {
  name: "buton",
  props: ["item"]
};
</script>
