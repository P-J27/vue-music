<!--
 * @Author: PJ
 * @Date: 2021-04-20 22:15:07
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="SongDetails"
       class="content-width">
    <div class="left">
      <song-list-details @getMusic="getMusic"
                         :songDetails="songDetails"></song-list-details>

    </div>
    <div class="right">
      <like-person :likeList="likeList" />
      <others-recom :recomList="recomList"
                    @changeSongDetail="changeSongDetail">
      </others-recom>

      <comment :commList="commList"></comment>

    </div>

  </div>
</template>

<script>
//模块组件
import SongListDetails from "components/common/song/songListDetails/left/SongListDetails";
import OthersRecom from "components/common/song/songListDetails/right/OthersRecom";
import LikePerson from "components/common/song/songListDetails/right/LikePerson";
import Comment from "components/common/song/songListDetails/right/Comment";
//网络请求
import {
  getMusicList,
  getSongDetailsList,
  getSongComm,
  getSongSub,
  getSongRecom,
} from "network/home";

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
      //歌单评论列表
      commList: [],
      //歌单评论查询参数
      commQueryInfo: {
        id: null,
        limit: 20,
        offset: 0,
      },
      /*喜欢的人*/
      //收藏列表
      likeList: [],
      //请求参数
      likeQueryInfo: {
        id: null,
        limit: 28,
        offset: 0,
      },

      /*推荐歌单列表 */
      recomList:[] 
    };
  },
  components: {
    SongListDetails,
    Comment,
    LikePerson,
    OthersRecom,
  },
  methods: {
    //发送获取音乐播放请求
    getMusic(id) {
      this.$emit("getMusic", id);
    },
    //获取歌单详情
    getSongDetailsListRef(id) {
      getSongDetailsList(id).then((res) => {
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
        res.playlist.trackIds.forEach((val) => {
          str.push(val.id);
        });
        this.songDetails.musicListId = str.join(",");
        this.getMusicListRef(this.songDetails.musicListId);
      });
    },
    //获取歌单中歌曲列表
    getMusicListRef(ids) {
      getMusicList(ids).then((res) => {
        if (res.code != 200) return this.$message.error("ERROR!");
        this.songDetails.musicList = res.songs;
      });
    },

    //获取歌单评论
    getSongCommRef(params) {
      getSongComm(params.id, params.limit, params.offset).then((res) => {
        if (res.code !== 200) return this.$message.error("ERROR");
        this.commList = res.comments;
      });
    },

    //获取收藏列表
    getSongListLikerRef(params) {
      getSongSub(params.id, params.limit, params.offset).then((res) => {
        if (res.code !== 200) return this.$message.error("ERROR");
        this.likeList = res.subscribers;
      });
    },
    //切换到其他推荐的歌单
    changeSongDetail(id) {
      this.init(id);
    },

    getSongListRecomRef(id) {
      getSongRecom(id).then((res) => {
        if (res.code !== 200) return this.$message.error("ERROR");
        this.recomList = res.playlists;
      });
    },

    // 初始化操作
    init(id) {
      //发送网络请求获取歌单详情
      this.getSongDetailsListRef(id);

      //初始化歌单评论
      this.commQueryInfo.id = id;
      this.getSongCommRef(this.commQueryInfo);

      //初始化其他推荐歌单
      this.getSongListRecomRef(id);

      //初始化收藏列表
      this.likeQueryInfo.id = id;
      this.getSongListLikerRef(this.likeQueryInfo);
    },
  },
  created() {
      const id = this.$route.query.id;
    this.init(id);
  },
  mounted(){
    

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