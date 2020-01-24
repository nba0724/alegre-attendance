<template>
  <v-row no-gutters>
    <v-col cols="6">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :label="item.dateLabel"
            prepend-inner-icon="today"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="6">
      <v-text-field
        v-model="time"
        :label="item.timeLabel"
        prepend-inner-icon="access_time"
        readonly
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "dateTime",
  props: ["item"],
  data: () => ({
    menu2: false,
    date: new Date(),
    time: ""
  })
};
</script>
