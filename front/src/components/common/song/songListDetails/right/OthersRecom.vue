<!--
 * @Author: PJ
 * @Date: 2021-04-22 21:56:36
 * @Description: 其他推荐歌单
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="OthersRecom">
    <el-card>
      <div class="title">
        <span class="iconfont icon-tuijian"> </span><em>其他推荐</em>
      </div>
      <div class="section">
        <ul>
          <li v-for="item in recomList"
              :key="item.id"
              @click="toDetail(item.id)">
            <div class="img">
              <el-image :src ="item.coverImgUrl + '?param50y50' "></el-image>
            </div>
            <div class="info">
              <span class="songListName">{{item.name}}</span>
              <span class="nickName">{{item.creator.nickname}}</span>
            </div>
          </li>
        </ul>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "OthersRecom",
  components: {},
  data() {
    return {};
  },
  props: {
    recomList:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  methods: {
    toDetail(id){
      this.$emit('changeSongDetail', id);
    }
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#OthersRecom {
  width: 380px;
  margin: 10px 0;

  .el-card {
    border-radius: 10px;

    .title {
      margin-bottom: 5px;

      span {
        font-size: 20px;
      }

      em {
        margin-left: 8px;
        font-style: normal;
        font-size: 15px;
      }
    }

    .section {
      ul {
        li {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin: 14px;
          &:hover {
            cursor: pointer;
          }
          .img {
            width: 50px;

            .el-image {
              width: 100%;
              border-radius: 20%;
            }
          }

          .info {
            margin-left: 12px;
            width: 240px;

            span {
              display: block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .songListName {
              font-size: 15px;
              font-weight: 700;
            }

            .nickName {
              margin-top: 12px;
              font-size: 12px;
              color: #a5a5c1;
            }
          }
        }
      }
    }
  }
}
</style>