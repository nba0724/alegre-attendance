<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({}),
  beforeCreate: async function() {
    this.$liff.init(process.env.VUE_APP_LIFF_ID);
  }
};
</script>
