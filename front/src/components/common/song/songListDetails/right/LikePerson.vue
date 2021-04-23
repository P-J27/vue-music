<!--
 * @Author: PJ
 * @Date: 2021-04-22 21:55:55
 * @Description: 歌单喜欢的人
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="LikePerson">
    <el-card>

      <div class="title">
        <span class="iconfont icon-shoucang2"></span><em>喜欢歌单的人</em>
      </div>
      <div class="section">
        <ul>
          <li v-for="item in likeList"
              :key="item.id">
        
            <el-image :src="item.avatarUrl + '?parma=38y38' "
                    title="item.nickname"></el-image>

          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LikePerson",
  components: {},
  data() {
    return {};
  },
  props: {
    likeList: {
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
#LikePerson {
  width: 380px;

  .el-card {
    border-radius: 10px;

    .title {
      margin-bottom: 5px;

      span {
        font-size: 18px;
      }

      em {
        margin-left: 10px;
        font-style: normal;
        font-size: 15px;
      }
    }

    .section {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        li {
          margin: 5px;
          width: 38px;
          height: 38px;
          .el-image {
            width: 100%;
            border-radius: 20%;
          }
        }
      }
    }
  }
}
</style>