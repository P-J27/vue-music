<template>
  <div id="RecomSinger"
       class="self-font">
    <h2 class="title"><i></i> 推荐歌手</h2>
    <singer :singerList="singerList"></singer>
  </div>
</template>

<script>
import Singer from "components/common/singer/singer/Singer";
export default {
  name: "RecomSinger",
  components: {
    Singer,
  },
  data() {
    return {};
  },
  props: {
    singerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "@/assets/css/base.less";
</style>