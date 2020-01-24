<template>
  <v-container>
    <v-row>
      <v-col>
        <ContentTitle :title="title" />
      </v-col>
      <v-col cols="auto" class="mt-5"> <Button :item="buttonData"/></v-col>
    </v-row>
    <v-row>
      <CardList :listData="listData" />
    </v-row>
  </v-container>
</template>

<script>
import ContentTitle from "@/components/organisms/ContentTitle";
import CardList from "@/components/organisms/CardList";
import Button from "@/components/molecules/Button";
export default {
  name: "home",
  components: { CardList, ContentTitle, Button },
  data: () => ({
    title: "Schedule List",
    buttonData: { icon: "add", name: "", color: "green accent-4" },
    listData: ["aaaAAAAAAAAAAAAAAAAAAA", "bbb", "ccc"]
  })
};
</script>
