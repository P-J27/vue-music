<!--
 * @Author: PJ
 * @Date: 2021-04-20 23:16:26
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="RecomSinger"
       class="self-font">
    <h2 class="title"><em></em> 推荐歌手</h2>
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