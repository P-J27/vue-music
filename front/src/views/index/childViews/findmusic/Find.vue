<template>
  <div id="find">
    <div class="content-width">
      <banner :bannerInfo="banner"
              class="banner"></banner>
      <div class="recomBody">
        <recom-song-list :songList="recomSongInfo.songList"></recom-song-list>
        <recom-music @getMusic="getMusic"
                     :musicList="recomMusicList"></recom-music>
        <recom-singer :singerList="recomSingerInfo.singerList"></recom-singer>

      </div>

    </div>

  </div>
</template>

<script>
import {
  getBanner,
  getRecomNewMusicList,
  getRecomSongList,
  getMusicList,
  getRecomSinger,
} from "network/home";

import Banner from "components/content/banner/Banner";
import RecomMusic from "components/content/recom-music/RecomMusic";
import RecomSongList from "components/content/recom-songlist/RecomSongList";
import RecomSinger from "components/content/recom-singer/RecomSinger";

export default {
  name: "find",
  components: {
    Banner,
    RecomMusic,
    RecomSongList,
    RecomSinger,
  },
  data() {
    return {
      banner: [],
      // 推荐歌单
      recomSongInfo: {
        limit: 28,
        songList: [],
      },
      //推荐歌曲
      recomMusicList: [],

      //推荐歌手
      recomSingerInfo: {
        offset: 0,
        limit: 28,
        singerList: [],
      },
    };
  },
  methods: {
    //获取播放歌曲详情
    getMusic(musicId) {
      this.$emit("getMusic", musicId);
    },
    //获取banner
    async getBannerRef() {
      let res = await getBanner();
      if (res.code !== 200) return this.$message.error("banner获取失败");
      this.banner = res.banners;
      // console.log(this.banner)
    },

    //获取推荐歌单
    async getRecomSongListRef(limit) {
      let res = await getRecomSongList(limit);
      if (res.code !== 200) return this.$message.error("推荐歌单数据获取失败");
      this.recomSongInfo.songList = res.result;
    },
    //获取推荐歌曲
    async getRecomNewMusicListRef(list) {
      let res = await getRecomNewMusicList();
      if (res.code !== 200) this.$message.error("推荐歌曲数据获取失败");
      else {
        res.result.forEach((item) => {
          this.getMusicListRef(item.id, list);
        });
      }
    },
    // 获取歌曲详细信息并保存到对象中
    async getMusicListRef(id, list) {
      let res = await getMusicList(id);
      if (res.code !== 200) this.$message.error("推荐歌曲数据获取失败");
      // console.log(res)
      list.push(res.songs[0]);
    },
    //获取推荐歌手信息
    async getRecomSingerRef(offset, limit) {
      let res = await getRecomSinger(offset, limit);
      this.recomSingerInfo.singerList = res.artists;
    },
  },
  created() {
    console.log(process);
    //初始化banner数据
    this.getBannerRef();
    //初始化推荐歌单数据
    this.getRecomSongListRef(this.recomSongInfo.limit);
    //初始化推荐歌曲数据
    this.getRecomNewMusicListRef(this.recomMusicList);
    //初始化推荐歌手数据
    this.getRecomSingerRef(
      this.recomSingerInfo.offset,
      this.recomSingerInfo.limit
    );
  },
};
</script>

<style lang="less" scoped>
// #find {
//   background-image: url("~assets/img/bg2.jpg");
//   background-size: cover;
// }
.recomBody {
  padding-left: 30px;
}

.banner {
  margin: 30px 0;
}
</style>