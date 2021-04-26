<!--
 * @Author: PJ
 * @Date: 2021-04-23 14:56:31
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="RankList"
       class="self-font">
    <h2 class="tilte"> <em></em>{{rankName}}</h2>
    <ul class="list">
      <li v-for="item in rankList"
          :key="item.id"
          @click="toDetail(item.id)"
          class="item">
        <div class="img">
          <el-image :src="item.coverImgUrl+'?param=300y300' "></el-image>
        </div>
        <div class="info">
          <span>{{item.name}}</span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "RankList",
  components: {},
  data() {
    return {};
  },
  props: {
    rankList: {
      type: Array,
      default() {
        return [];
      },
    },
    rankName: {
      type: String,
      default: "PJ-Rank",
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "/songDetails",
        query: {
          id: id,
        },
      });
    },
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url(assets/css/base.less);
#RankList {
  h2 {
    margin: 15px;
  }

  .list {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    .item {
      padding: 20px;
      flex: 0 0 11%;
      .img {
        cursor: pointer;
        .el-image {
          box-shadow: 0px 0px 12px #7b7b7b;
        }
      }
      .info {
        padding-top: 10px;
      }
    }
  }
}
</style>
