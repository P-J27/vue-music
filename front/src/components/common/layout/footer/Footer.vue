<!--
 * @Author: PJ
 * @Date: 2021-04-19 21:17:55
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="Footer">
    <div class="footer_content content-width">
      <div>
        <span>开源地址</span>
        <div class="link">
          <a href="https://github.com/P-J27/vue-music"
             target="_blank"><span><i
                 class="iconfont icon-github"></i>Github</span></a>
          <a href="https://gitee.com/p_pj/vue-music"
             target="_blank"><span><i
                 class="iconfont icon-gitee Gitee"></i>Gitee</span></a>
        </div>
      </div>
      <div>
        <span>致谢</span>
        <div class="link">
          <a href="https://music.163.com/"
             target="_blank"><span><i
                 class="iconfont icon-wangyiyunyinle wyy"></i>网易云音乐</span></a>
          <a href="https://autumnfish.cn/"
             target="_blank"><span><i
                 class="iconfont icon-github"></i>API</span></a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">

#Footer {
  // height: 180px;

  border-top: 1px solid #d3d3d3;
 background-image: url('~assets/img/footer-bg.jpg');
   opacity: 0.8;
   background-size: cover;

  .footer_content {
    padding: 10px 100px;
    display: flex;
    justify-content: space-around;
    

    span {
      font-size: 18px;
      font-weight: 700;
    }

    .link {
      margin: 8px 0;
      font-size: 14px;
      color: #ca3636;
      display: flex;
      align-content: center;

      a {
        display: block;
        margin: 10px 20px;

        &:hover {
          color: rgb(84, 154, 171);
        }

        span {
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 16px;

          i {
            font-size: 25px;
            margin: 0 5px;
          }
          .wyy,
          .Gitee {
            margin: 0 4px;
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>