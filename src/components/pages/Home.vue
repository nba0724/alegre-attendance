<template>
  <CardList :listData="listData" />
</template>

<script>
import CardList from "@/components/organisms/CardList";
export default {
  name: "home",
  components: { CardList },
  data: () => ({
    listData: ["aaa", "bbb", "ccc"]
  })
};
</script>
