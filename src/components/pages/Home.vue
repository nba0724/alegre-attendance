<template>
  <main>
    <ContentTitle :title="title" />
    <CardList :listData="listData" />
  </main>
</template>

<script>
import CardList from "@/components/organisms/CardList";
import ContentTitle from "@/components/organisms/ContentTitle";
export default {
  name: "home",
  components: { CardList, ContentTitle },
  data: () => ({
    title: "Home",
    listData: ["aaa", "bbb", "ccc"]
  })
};
</script>
