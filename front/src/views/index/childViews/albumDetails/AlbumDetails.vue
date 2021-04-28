<!--
 * @Author: PJ
 * @Date: 2021-04-20 22:28:57
 * @Description: 歌手专辑详情页面
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="AlbumDetails"
       class="content-width">
    <div class="left">
      <el-card>
        <albumDetailsList @getMusic="getMusic"
                          :album="album"
                          :albumMusic="albumMusic"></albumDetailsList>
        <album-comment :CommentList="hotComments"
                       type="hot"></album-comment>
        <album-comment :CommentList="newComments"
                       type="new"></album-comment>
        <!-- 评论分页 -->
        <div class="page"
             v-if="newComments.length">
          <el-pagination @current-change="handleCurrentChange"
                         :current-page="pageInfo.pageNum"
                         :page-size="pageInfo.pageSize"
                         layout="total, prev, pager, next, jumper"
                         :total="pageInfo.total">
          </el-pagination>

        </div>

      </el-card>
    </div>
    <div class="right">
      <singerInfo :singerInfo="singerInfo"></singerInfo>
    </div>

  </div>
</template>

<script>
import AlbumDetailsList from "components/common/album/AlbumDetailsList";
import SingerInfo from "components/common/album/SingerInfo";
import AlbumComment from "components/common/mv/mvDetails/left/MvComment";

import { getAlbumDetails, getAlbumComment } from "network/home";
export default {
  name: "AlbumDetails",
  components: { AlbumDetailsList, AlbumComment, SingerInfo },
  data() {
    return {
      albumId: null,
      album: null,
      singerInfo: null,
      albumMusic: [],
      hotComments: [],
      newComments: [],
      commQueryInfo: {
        id: null,
        limit: 15,
        offset: 0,
      },
      pageInfo: {
        //每页展示条数
        pageSize: 15,
        //当前页码
        pageNum: 1,
        //总页码
        total: 0,
      },
    };
  },
  props: {},
  methods: {
    getMusic(id) {
      this.$emit("getMusic", id);
    },

    //更改页码时触发
    handleCurrentChange(pagenum) {
      this.pageInfo.pageNum = pagenum;
      //更新对应页码的歌单偏移量
      this.commQueryInfo.offset =
        (this.pageInfo.pageNum - 1) * this.commQueryInfo.limit;
      //重新获取评论 (评论中自动删除了hotComment 所以不需要判断处理)
      this.getAlbumCommentRef(this.commQueryInfo);
    },

    //获取专辑详情
    getAlbumDetailsRef(id) {
      getAlbumDetails(id).then((res) => {
        if (res.code != 200) return this.$message.error("ERRPR!");
        this.album = res.album;
        this.albumMusic = res.songs;
        this.singerInfo = res.album.artist;
      });
    },
    //获取专辑评论
    getAlbumCommentRef(params) {
      getAlbumComment(params.id, params.limit, params.offset).then((res) => {
        if (res.code != 200) return this.$message.error("ERRPR!");
        this.hotComments = res.hotComments;
        this.newComments = res.comments;
        this.pageInfo.total = res.total;
      });
    },
  },
  computed: {},
  created() {
    const id = this.$route.query.id;
    this.albumId = id;
    this.commQueryInfo.id = id;
    this.getAlbumDetailsRef(this.albumId);
    this.getAlbumCommentRef(this.commQueryInfo);
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
#AlbumDetails {
  margin-top: 25px;

  .left {
    width: 1020px;
    .page {
      display: flex;
      justify-content: center;
    }
  }
  .right {
    width: 320px;
  }
}
</style>