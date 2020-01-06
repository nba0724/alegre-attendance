<template>
  <div>
    <v-app-bar app color="green accent-4" dark>
      <v-toolbar-title>
        <span>ALEGRE SCHEDULE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <Menu v-model="drawer" />
  </div>
</template>

<script>
import Menu from "@/components/common/Menu";
export default {
  name: "Header",
  components: {
    Menu
  },
  data: () => {
    return {
      drawer: false
    };
  }
};
</script>
