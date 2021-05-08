
<template>
  <div id="Index">
    <el-container class="container">
      <el-header>

        <Header :index="index"></Header>
      </el-header>
      <el-main>

        <router-view @getMusic="getMusic"> </router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
      <Player @getMusic="getMusic"
              @getMusicUrl="getMusicUrlRef"
              :playMusicInfo="playMusicInfo"></Player>
    </el-container>
  </div>
</template>

<script>
import Header from "components/common/layout/header/Header";
import Footer from "components/common/layout/footer/Footer";
import Player from "components/common/player/Player";

import { getMusicUrl, getMusicList } from "network/home";
export default {
  name: "Index",
  data() {
    return {
      index: "/find",
      playMusicInfo: null,
    };
  },
  methods: {
   
    getMusic(musicId) {
      getMusicList(musicId).then((res) => {
        if (res.code !== 200) return this.$message.error("ERROR");
        if (this.$store.state.clearListFlag == true) {
          this.$store.commit("setclearListFlag", false);
        }
        this.$store.commit("setPlayerMusicId", res.songs[0].id);
        this.$store.commit("setMusicDetailsList", res.songs[0]);
      });
    },
  
    //获取歌曲url
    getMusicUrlRef(id) {
      getMusicUrl(id).then((res) => {
        if (res.code !== 200) return this.$message.error("ERROR");
        if (res.data[0].br == 0) {
          this.playMusicInfo = null;

          //无版权删除
          this.$store.commit("removeMusicList", id);
          return this.$message.error("无版权，不能播放");
        }
        this.playMusicInfo = res.data[0];
      });
    },
  },
  components: {
    Header,
    Player,
    Footer,
  },
};
</script>

<style scoped>
div .el-header {
  padding: 0;
  text-align: center;
}

div .el-footer {
  padding: 0;
}

#Index {
  background-color: rgb(245, 245, 245);
  position: relative;
  /*overflow-x: hidden;*/
}
/* .el-main{
  background-image: url('~assets/img/bg.jpg');
  background-size: cover;
} */
</style>