<template>
  <v-container>
    <v-row v-for="list in listData" :key="list">
      <v-col cols="12">
        <Card :data="list" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/molecules/Card";

export default {
  name: "cardList",
  props: ["listData"],
  components: { Card }
};
</script>
