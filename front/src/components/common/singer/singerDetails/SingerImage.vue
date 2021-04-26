<!--
 * @Author: PJ
 * @Date: 2021-04-26 21:38:55
 * @Description: 歌手图像组件
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="SingerImage"
       v-if="singerInfo">
    <div class="img">
      <el-image :src="singerInfo.picUrl + '?param=250y250' "
                fit="cover"></el-image>
    </div>
    <div class="info">
      <h2 class="name">{{singerInfo.name}}</h2>
      <span class="alias"
            v-if="singerInfo.alias.length">{{singerInfo.alias[0]}}</span>
      <div class="num">
        <div>
          <em class="iconfont icon-zhuanji1"></em>
          <span>{{singerInfo.musicSize}}</span>
        </div>
        <div><em
              class="iconfont icon-zhuanji"></em><span>{{singerInfo.albumSize}}</span>
        </div>
        <div><em
              class="iconfont icon-mv"></em><span>{{singerInfo.mvSize}}</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SingerImage",
  components: {},
  data() {
    return {};
  },
  props: {
    singerInfo: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#SingerImage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #dbdbdb;

  .img {
    .el-image {
      border-radius: 50%;
      width: 250px;
      height: 250px;
    }
  }

  .info {
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .name {
      font-size: 22px;
    }

    .alias {
      font-size: 14px;
      color: #7b7b7b;
    }

    .num {
      display: flex;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 45px;
        em {
          font-size: 40px;
          width: 40px;
          height: 40px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>