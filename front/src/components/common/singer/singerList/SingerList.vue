<!--
 * @Author: PJ
 * @Date: 2021-04-28 21:29:32
 * @Description: 歌手页面的列表模块
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="SingerList">
    <singer :singerList="singerList"></singer>
    <div class="page">
      <el-button type="info"
                 @click="changePage('up')"
                 plain
                 :disabled="pageUp">上一页</el-button>
      <el-button type="info"
                 @click="changePage('down')"
                 plain
                 :disabled="pageDown">下一页</el-button>

    </div>

  </div>
</template>

<script>
import singer from "../singer/Singer";
export default {
  name: "SingerList",
  components: { singer },
  data() {
    return {};
  },
  props: {
    pageUp: {
      type: Boolean,
    },
    pageDown: {
      type: Boolean,
    },
    singerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    changePage(type) {
      //发送跳转页面事件
      this.$emit("changePage", type);
    },
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#SingerList {
  .page {
    display: flex;
    justify-content: center;
    .el-button {
      margin: 40px 100px;
    }
  }
}
</style>
