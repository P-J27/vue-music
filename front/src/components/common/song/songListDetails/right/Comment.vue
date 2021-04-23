<!--
 * @Author: PJ
 * @Date: 2021-04-22 21:56:09
 * @Description: 评论模块
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="Comment">
    <el-card>
      <div class="title">
        <span class="iconfont icon-pinglun1"> </span><em>热门评论</em>
      </div>
      <div class="section">
        <ul>
          <li v-for="item in commList"
              :key="item.id">
            <div class="img">
              <el-image :src="item.user.avatarUrl + '?param=50y50' "></el-image>
            </div>
            <div class="info">
              <span class="username">
                {{item.user.nickname}}
              </span>
              <span class="cont">
                {{item.content}}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Comment",
  components: {},
  data() {
    return {};
  },
  props: {
      commList:{
          type:Array,
          default(){
              return [];
          }
      },
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#Comment {
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
        li {
          display: flex;
          flex-wrap: nowrap;
          margin: 16px 8px;
          .img {
            width: 50px;

            .el-image {
              width: 100%;
              border-radius: 50%;
            }
          }
          .info {
            margin-left: 12px;
            width: 250px;
            span {
              display: block;
            }
            .username {
              font-weight: 700;
              font-size: 14px;
            }
            .cont {
              width: 100%;
              font-size: 13px;
              margin-top: 12px;
              background-color: #f7f7f7;
              line-height: 1.4;
              padding: 4px;
            }
          }
        }
      }
    }
  }
}
</style>