<template>
  <v-container>
    <v-row>
      <v-col>
        <ContentTitle :title="title" />
      </v-col>
      <v-col v-if="isReadOnly" cols="auto" class="mt-5">
        <Button
          :item="editButtonData"
          @button-click="clickEditSaveButton('edit')"
        />
      </v-col>
      <v-col v-if="!isReadOnly" cols="auto" class="mt-5">
        <Button
          :item="saveButtonData"
          @button-click="clickEditSaveButton('save')"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model="subject"
          label="Subject"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model="place"
          label="Place"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters><DateTime :item="startDateTimeData" /> </v-row>
    <v-row no-gutters><DateTime :item="endDateTimeData" /> </v-row>
    <v-row no-gutters>
      <v-col cols="4">
        <Button
          :item="goingButtonData"
          @button-click="clickAttendanceButton('going')"
        />
      </v-col>
      <v-col cols="4">
        <Button
          :item="maybeButtonData"
          @button-click="clickAttendanceButton('maybe')"
        />
      </v-col>
      <v-col cols="4">
        <Button
          :item="cantGoButtonData"
          @button-click="clickAttendanceButton('cantgo')"
        />
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
        <v-textarea
          v-model="detail"
          auto-grow
          label="Detail"
          :readonly="isReadOnly"
        >
        </v-textarea>
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
    isProcessing: false,
    isReadOnly: true,
    title: "Schedule",
    subject: "",
    place: "",
    detail: "",
    editButtonData: {
      icon: "edit",
      name: "",
      color: "green accent-4",
      block: false
    },
    saveButtonData: {
      icon: "save",
      name: "",
      color: "red accent-2",
      block: false
    },
    goingButtonData: {
      icon: "",
      name: "Going",
      color: "green accent-4",
      block: true
    },
    maybeButtonData: {
      icon: "",
      name: "Maybe",
      color: "orange darken-1",
      block: true
    },
    cantGoButtonData: {
      icon: "",
      name: "Can't Go",
      color: "blue darken-2",
      block: true
    },
    startDateTimeData: {
      dateLabel: "Start Date",
      timeLabel: "Start Time",
      date: "",
      time: ""
    },
    endDateTimeData: {
      dateLabel: "End Date",
      timeLabel: "End Time",
      date: "",
      time: ""
    }
  }),
  mounted: function() {
    this.getSchdeuleInfo();
    this.getAttendanceInfo();
  },
  methods: {
    getSchdeuleInfo() {
      // 値の取得処理を記載
      // XXXXXXXXXXXXXXXXXX
      this.subject = "subject";
      this.place = "place";
      this.detail = "detail\r\naaa";
      this.startDateTimeData.date = moment().format("YYYY-MM-DD");
      this.startDateTimeData.time = moment().format("HH:mm");
      this.endDateTimeData.date = moment().format("YYYY-MM-DD");
      this.endDateTimeData.time = moment()
        .add(1, "hours")
        .format("HH:mm");
      this.setAttendanceButtonColor("");
    },
    getAttendanceInfo() {},
    setAttendanceButtonColor(attendanceStatus) {
      switch (attendanceStatus) {
        case "going":
          this.goingButtonData.color = "green accent-4";
          this.maybeButtonData.color = "blue-grey";
          this.cantGoButtonData.color = "blue-grey";
          break;
        case "maybe":
          this.goingButtonData.color = "blue-grey";
          this.maybeButtonData.color = "orange darken-1";
          this.cantGoButtonData.color = "blue-grey";
          break;
        case "cantgo":
          this.goingButtonData.color = "blue-grey";
          this.maybeButtonData.color = "blue-grey";
          this.cantGoButtonData.color = "blue darken-2";
          break;
        default:
          this.goingButtonData.color = "green accent-4";
          this.maybeButtonData.color = "orange darken-1";
          this.cantGoButtonData.color = "blue darken-2";
      }
    },
    clickEditSaveButton(mode) {
      // 処理中の判定実施
      if (this.isProcessing) {
        return;
      }
      this.isProcessing = true;

      if (mode === "save") {
        console.log("save");
      }

      // 編集モードの場合 → 閲覧モードに変更
      // 閲覧モードの場合 → 編集モードに変更
      this.isReadOnly = !this.isReadOnly;
      this.isProcessing = false;
    },
    clickAttendanceButton(attendanceStatus) {
      // 処理中の判定実施
      if (this.isProcessing) {
        return;
      }
      this.isProcessing = true;
      this.setAttendanceButtonColor(attendanceStatus);
      this.isProcessing = false;
    }
  }
};
</script>
