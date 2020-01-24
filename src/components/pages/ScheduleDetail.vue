<template>
  <v-container>
    <v-row>
      <v-col>
        <ContentTitle :title="title" />
      </v-col>
      <v-col cols="auto" class="mt-5"> <Button :item="buttonData"/></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-text-field v-model="subject" label="Subject" readonly></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters><DateTime :item="startDateTimeData" /> </v-row>
    <v-row no-gutters><DateTime :item="endDateTimeData" /> </v-row>
    <v-row no-gutters>
      <v-col cols="4">
        <v-btn block color="green accent-4" dark>Going</v-btn>
      </v-col>
      <v-col cols="4"
        ><v-btn block color="orange darken-1" dark>Maybe</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn block color="blue-grey darken-1" dark>Can't Go</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <p>参加者 2人・未定 1人</p>
      </v-col>
      <v-col cols="12" no-gutters>
        <v-badge color="green accent-4" overlap>
          <v-icon slot="badge" dark small>done</v-icon>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-badge>
        <v-badge color="orange darken-1" overlap>
          <v-icon slot="badge" dark small>stop</v-icon>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-badge>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea auto-grow label="Detail" readonly>aaa</v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentTitle from "@/components/organisms/ContentTitle";
import DateTime from "@/components/organisms/DateTime";
import Button from "@/components/molecules/Button";

import moment from "moment";

export default {
  name: "home",
  components: { ContentTitle, DateTime, Button },
  data: () => ({
    title: "Schedule",
    buttonData: { icon: "edit", name: "", color: "green accent-4" },
    startDateTimeData: {
      dateLabel: "Start Date",
      date: moment().format("YYYY-MM-DD"),
      timeLabel: "Start Time",
      time: moment().format("HH:mm")
    },
    endDateTimeData: {
      dateLabel: "End Date",
      date: moment().format("YYYY-MM-DD"),
      timeLabel: "End Time",
      time: moment().format("HH:mm")
    },
    subject: "aaaa"
  })
};
</script>
