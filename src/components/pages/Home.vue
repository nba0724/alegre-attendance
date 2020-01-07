<template>
  <v-container>
    <main>
      <ContentTitle :title="title" />
      <CardList :listData="listData" />
      <Button :item="buttonData" />
    </main>
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
    buttonData: { icon: "add", name: "New Schedule" },
    listData: ["aaa", "bbb", "ccc"]
  })
};
</script>
