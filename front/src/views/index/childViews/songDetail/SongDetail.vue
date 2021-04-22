<!--
 * @Author: PJ
 * @Date: 2021-04-20 22:15:07
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="SongDetails" class="content-width">
    <div class="left">
      <song-list-details @getMusic="getMusic"
                         :songDetails="songDetails"></song-list-details>

    </div>
    <div class="right">

    </div>

  </div>
</template>

<script>


import SongListDetails from "components/common/song/songListDetails/left/SongListDetails";

import{getMusicList,getSongDetailsList} from 'network/home'

export default {
  name: "SongDetails",
  data() {
    return {
      songDetails: {
        songId: null,
        detailsName: "",
        detailsImg: "",
        detailsInfo: "",
        detailsTag: [],
        authorName: "",
        authorImg: "",
        musicListId: [],
        musicList: [],
      },
    };
  },
  components: {
    SongListDetails,
  },
  methods: {
         //发送获取音乐播放请求
      getMusic(id) {
        this.$emit("getMusic", id)
      },
       //获取歌单详情
      getSongDetailsListRef(id) {
        getSongDetailsList(id).then(res => {
          // console.log(res)
          if (res.code != 200) return this.$message.error("ERROR!");
          this.songDetails.detailsName = res.playlist.name;
          this.songDetails.detailsImg = res.playlist.coverImgUrl;
          this.songDetails.detailsInfo = res.playlist.description;
          this.songDetails.detailsTag = res.playlist.tags;
          this.songDetails.playCount = res.playlist.playCount;
          this.songDetails.authorName = res.playlist.creator.nickname;
          this.songDetails.authorImg = res.playlist.creator.avatarUrl;
          this.songDetails.musicListId = res.playlist.trackIds;
          
          const str = [];
          res.playlist.trackIds.forEach(val => {
            str.push(val.id);
          })
          this.songDetails.musicListId = str.join(',');
          this.getMusicListRef(this.songDetails.musicListId);
          
        });
      },
      //获取歌单中歌曲列表
      getMusicListRef(ids) {
        getMusicList(ids).then(res => {
          if (res.code != 200) return this.$message.error("ERROR!");
          this.songDetails.musicList = res.songs;
  
        })
      },
  },
  created(){
      const id = this.$route.query.id;
      //发送网络请求获取歌单详情
      this.getSongDetailsListRef(id);
  }
};
</script>

<style lang="less" scoped>
#SongDetails {
    margin-top: 25px;
    
    .left {
      width: 950px;
    }
  }
</style>