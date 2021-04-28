<!--
 * @Author: PJ
 * @Date: 2021-04-28 19:21:29
 * @Description: 其他推荐MV
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="OtherMv">
    <h2><span class="iconfont icon-tuijian"></span>猜你喜欢</h2>
    <div class="list">
      <ul>
        <li v-for="item in mvRecomList"
            :key="item.id"
            @click="toDetails(item.id)">

          <img :src="item.cover + '?param=318y178' ">
          <div class="smokeIcon">
            <span class="iconfont icon-bofang"></span>
          </div>
          <div class="info">
            <span><i class="iconfont icon-mv"></i>
              {{item.name}}
            </span><p>By.{{item.artistName}}</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "OtherMv",
  components: {},
  data() {
    return {};
  },
  props: {
    mvRecomList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    toDetails(id) {
      this.$emit("changeMvDetail", id);
    },
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#OtherMv {
  h2 {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;

    span {
      font-size: 20px;
      margin-right: 6px;
    }
  }

  .list {
    ul {
      li {
        margin: 14px 0;
        &:hover {
          cursor: pointer;
          .smokeIcon {
            display: block !important;
          }
        }
        .img {
          width: 100%;
          position: relative;
          img {
            width: 100%;
          }
          .smokeIcon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-25px, -25px);
            display: none;
            span {
              font-size: 50px;
              color: white;
            }
          }
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          span {
            display: flex;
            align-items: center;
            i {
              font-size: 26px;
              color: red;
              margin-right: 6px;
            }
          }
          p {
            font-size: 12px;
            color: #c3c3c3;
          }
        }
      }
    }
  }
}
</style>