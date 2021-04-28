<!--
 * @Author: PJ
 * @Date: 2021-04-20 22:26:37
 * @Description: MV详情页面
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="MvDetails"
       class="content-width">
    <div class="left">
      <el-card>

        <mv-player :mvUrl="mvUrl"
                   :mvDetails="mvDetails"></mv-player>
        <mv-comment :CommentList="hotCommList"
                    type="hot"></mv-comment>
        <mv-comment :CommentList="newCommList"
                    type="new"></mv-comment>
        <!-- 评论分页 -->
        <div class="page"
             v-if="newCommList.length">
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
      <el-card>
        <mv-recom @changeMvDetail="changeMvDetail"
                  :mvRecomList="mvRecomList"></mv-recom>

      </el-card>
    </div>

  </div>
</template>

<script>
import MvPlayer from "components/common/mv/mvDetails/left/MvPlayer";
import MvComment from "components/common/mv/mvDetails/left/MvComment";
import MvRecom from "components/common/mv/mvDetails/right/MvRecom";

import { getMvUrl, getMvDetails, getMvComment, getMvRecom } from "network/home";
export default {
  name: "MvDetails",
  components: { MvPlayer, MvComment, MvRecom },
  data() {
    return {
      mvId: null,
      mvUrl: "",
      mvDetails: null,
      commQueryInfo: {
        id: null,
        limit: 15,
        offset: 0,
      },
      newCommList: [],
      hotCommList: [],
      mvRecomList: [],
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

    //更改页码时触发
    handleCurrentChange(pagenum) {
      this.pageInfo.pageNum = pagenum;
      //更新对应页码的歌单偏移量
      this.commQueryInfo.offset =
        (this.pageInfo.pageNum - 1) * this.commQueryInfo.limit;
      //重新获取评论 (评论中自动删除了hotComment 所以不需要判断处理)
      this.getMvCommentRef(this.commQueryInfo);
    },
    //获取mv的url
    getMvUrlRef(id) {
      getMvUrl(id).then((res) => {
        if (res.code !== 200) return this.$message.error("ERROR");
        this.mvUrl = res.data.url;
      });
    },
    //获取MV的详情
    getMvDetailsRef(id) {
      getMvDetails(id).then((res) => {
        if (res.code !== 200) return this.$message.error("ERROR");
        this.mvDetails = res.data;
      });
    },
    //获取Mv的评论
    getMvCommentRef(params) {
      getMvComment(params.id, params.limit, params.offset).then((res) => {
        // console.log(res);
        if (res.code != 200) return this.$message.error("ERROR!");

        this.newCommList = res.comments;
        this.hotCommList = res.hotComments;
        this.pageInfo.total = res.total;
      });
    },
    //获取相关推荐mv
    getMvRecomRef(id) {
      getMvRecom(id).then((res) => {
        if (res.code != 200) return this.$message.error("ERROR!");
        this.mvRecomList = res.mvs;
      });
    },
    //切换mv
    changeMvDetail(id) {
      this.initRequest(id);
    },
    //初始化请求
    initRequest(id) {
      this.mvId = id;
      this.commQueryInfo.id = id;
      this.getMvUrlRef(id);
      this.getMvDetailsRef(id);
      this.getMvCommentRef(this.commQueryInfo);
      this.getMvRecomRef(id);
    },
  },
  computed: {},
  created() {
    const id = this.$route.query.id;
    this.initRequest(id);
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
#MvDetails {
  margin-top: 25px;

  .left {
    width: 980px;
  }

  .right {
    width: 360px;
  }
  .page {
    display: flex;
    justify-content: center;
  }
}
</style>