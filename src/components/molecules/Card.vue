<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-img
            src="https://unsplash.it/100/100?random"
            height="100px"
            width="100px"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <v-card-title>{{ data }}</v-card-title>
          <v-icon>today</v-icon>
          <v-carde-text>2019-01-01</v-carde-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "card",
  props: ["data"]
};
</script>
