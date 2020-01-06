<template>
  <v-navigation-drawer
    v-model="drawer"
    class="green accent-4"
    app
    temporary
    right
    dark
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.name"
        link
        @click="clickMenu(item)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["value"],
  computed: {
    drawer: {
      get() {
        return this.value;
      },
      set(newVal) {
        if (this.value !== newVal) this.$emit("input", newVal);
      }
    }
  },
  data: () => {
    return {
      items: [
        {
          name: "Home",
          icon: "home",
          url: "/home"
        },
        {
          name: "Reservation",
          icon: "today",
          url: "/reservation"
        }
      ]
    };
  },
  methods: {
    clickMenu: async item => {
      this.$router.push({ path: item.url });
    }
  }
};
</script>
