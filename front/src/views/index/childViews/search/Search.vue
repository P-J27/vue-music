<!--
 * @Author: PJ
 * @Date: 2021-05-07 23:05:38
 * @Description: 搜索结果page
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="SearchResults">
    <div class="banner">
      <div class="bg">
        <img src="@/assets/img/banner-bg.jpg">
      </div>
      <div class="input">
        <el-input placeholder="音乐 / 歌手 / 歌单 / mv"
                  clearable
                  v-model="inputValue"
                  @keyup.enter.native="toSearch">
          <el-button class="searchBtn"
                     size="mini"
                     slot="append"
                     icon="el-icon-search"
                     @click="toSearch"></el-button>
        </el-input>
      </div>
    </div>
    <div class="info content-width">
      <el-card>
        <div class="tabs">
          <span @click="changeTabs('music')"
                :class="flag == 'music'? 'active':''">单曲</span>
          <span @click="changeTabs('singer')"
                :class="flag == 'singer'? 'active':''">歌手</span>
          <span @click="changeTabs('album')"
                :class="flag == 'album'? 'active':''">专辑</span>
          <span @click="changeTabs('song')"
                :class="flag == 'song'? 'active':''">歌单</span>
          <span @click="changeTabs('video')"
                :class="flag == 'video'? 'active':''">视频</span>
        </div>
        <div class="cont">
          <!--单曲-->

          <div class="music"
               :style="{'display': flag == 'music'?'block':'none' }">
            <music-list @getMusic="getMusic"
                        :musicList="musicList"></music-list>
          </div>
          <!--歌手-->
          <div class="singer"
               :style="{'display': flag == 'singer'?'block':'none' }">

            <singer-list :singerList="singerList">
            </singer-list>
          </div>
          <!--专辑-->
          <div class="album"
               :style="{'display': flag == 'album'?'block':'none' }">
            <song-sheet :songType="'singer'"
                        :styleAttr="styleAttr"
                        :sheetList="albumList"></song-sheet>
          </div>
          <!--歌单-->
          <div class="song"
               :style="{'display': flag == 'song'?'block':'none' }">
            <song-sheet :imageUrlAttr="'search'"
                        :styleAttr="styleAttr"
                        :sheetList="songList"></song-sheet>
          </div>
          <!--mv-->
          <div class="video"
               :style="{'display': flag == 'video'?'block':'none' }">
            <mv-list :mvList="mvList"></mv-list>
          </div>

        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
import SingerList from "components/common/singer/singerList/SingerList";
import MvList from "components/common/mv/mvList/MvList";
import SongSheet from "components/common/song/songSheet/SongSheet";
import MusicList from "components/common/musicList/MusicList";
import { getSearchContent } from "network/home";
export default {
  name: "SearchResults",
  components: { SongSheet, MusicList, MvList, SingerList },
  data() {
    return {
      inputValue: "",
      searchInfo: {
        keyword: null,
        limit: 60,
        offset: 0,
        type: 1, //1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
      },
      that: this,
      musicList: [],
      singerList: [],
      albumList: [],
      songList: [],
      mvList: [],
      flag: "music",
      styleAttr: "singer",
    };
  },
  props: {},
  methods: {
    toSearch() {
      if (this.inputValue == "") return this.$message.error("搜索关键字为空!");
      this.$store.commit("setSearch", this.inputValue);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //跳转至详情页
    toDetils(id) {
      this.$router.push({
        path: "/mvDetails",
        query: {
          id: id,
        },
      });
    },

    changeTabs(name) {
      if (name == "music") {
        this.searchInfo.type = 1;
      } else if (name == "song") {
        this.searchInfo.type = 1000;
      } else if (name == "video") {
        this.searchInfo.type = 1004;
      } else if (name == "singer") {
        this.searchInfo.type = 100;
      } else if (name == "album") {
        this.searchInfo.type = 10;
      } else {
        return null;
      }
      this.getSearchContentRef(this.searchInfo);
      this.flag = name;
    },

    getMusic(id) {
      this.$emit("getMusic", id);
    },

    toSingerDetails(id) {
      this.$router.push({
        path: "singerDetails",
        query: {
          id: id,
        },
      });
    },

    getSearchContentRef(params) {
      getSearchContent(
        params.keyword,
        params.limit,
        params.offset,
        params.type
      ).then((res) => {
        // console.log(res)
        if (res.code != 200) return this.$message.error("ERROR!");
        if (params.type == 1) {
          this.searchInfo.type = 1;
          this.musicList = res.result.songs;
        } else if (params.type == 1000) {
          this.searchInfo.type = 1000;
          this.songList = res.result.playlists;
          // console.log(1000)
        } else if (params.type == 1004) {
          this.searchInfo.type = 1004;
          this.mvList = res.result.mvs;
          // console.log(1004)
        } else if (params.type == 100) {
          this.searchInfo.type = 100;
          this.singerList = res.result.artists;
          // console.log(this.singerList)
        } else if (params.type == 10) {
          this.searchInfo.type = 10;
          this.albumList = res.result.albums;
          // console.log(this.albumList)
          // console.log(10)
        } else {
          return null;
        }
      });
    },
  },
  computed: {
    keywords() {
      return this.$store.getters.getSearchKeyWord;
    },
  },
  created() {
    this.searchInfo.keyword = this.keywords;
    this.inputValue = this.keywords;
    this.getSearchContentRef(this.searchInfo);
  },
  mounted() {},
  watch: {
    //监听关键字 发生改变时进行数据的初始化
    keywords() {
      this.searchInfo.keyword = this.keywords;
      this.inputValue = this.keywords;
      this.getSearchContentRef(this.searchInfo);
    },
  },
  filters: {
    formatTime(time, that) {
      return that.$utils.formatTime(time);
    },
    tranNumber(num, that) {
      return that.$utils.tranNumber(num, 0);
    },
  },
};
</script>

<style lang="less" scoped>
#SearchResults {
  .banner {
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;

    .bg {
      position: absolute;
      width: 100%;
      top: -600px;

      img {
        width: 100%;
      }
    }

    .input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-300px, -40px);
      width: 600px;
    }
  }

  .info {
    .el-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .el-card__body {
        width: auto;
        .divs {
          width: 600px;
          height: 400px;
          background-color: aquamarine;
        }
        .el-tabs__nav {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }

      .tabs {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          margin: 0 40px;
          padding: 4px 20px;
          font-size: 18px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .active {
        font-weight: 700;
        border-bottom: 2px solid #ca3636;
      }

      .cont {
        margin-top: 20px;
        width: 1000px;

        .singer {
          ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .singerItem {
              flex: 0 0 20%;
              padding: 20px;
              cursor: pointer;

              .img {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: nowrap;

                .el-image {
                  display: flex;
                  justify-content: center;
                  border-radius: 50%;
                  box-shadow: 0px 0px 12px #7b7b7b;
                }
              }

              .info {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 10px;

                .musicSize {
                  padding-top: 4px;
                  font-size: 14px;
                  color: #ca3636;
                }
              }
            }
          }
        }

        .videoList {
          display: flex;
          justify-content: left;
          flex-wrap: wrap;
          align-items: center;

          .item {
            flex: 0 0 23%;
            margin: 10px;
            overflow: hidden;

            &:hover {
              cursor: pointer;

              .smokeIcon {
                display: block !important;
              }
            }

            .img {
              position: relative;
              width: 100%;

              .el-image {
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

              .smoke {
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                bottom: 5px;
                width: 100%;
                padding-left: 5px;
                background-color: rgba(0, 0, 0, 0.4);
                color: #e7e7e7;

                .playCount {
                  font-size: 13px;

                  i {
                    margin-right: 1px;
                    font-style: normal;
                    font-size: 12px;
                  }
                }

                .playTime {
                  margin: 0 5px 0 10px;
                }

                span {
                  font-size: 14px;
                }
              }
            }

            .info {
              box-sizing: border-box;

              h2 {
                font-weight: 500;
                overflow: hidden;
                white-space: nowrap;
                font-size: 14px;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
}
</style>