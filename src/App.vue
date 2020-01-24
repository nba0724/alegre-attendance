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
    await this.$liff.init({ liffId: process.env.VUE_APP_LIFF_ID });
    if (!this.$liff.isLoggedIn()) {
      this.$liff.login();
    }
  }
};
</script>
