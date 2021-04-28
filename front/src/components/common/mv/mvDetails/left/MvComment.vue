<!--
 * @Author: PJ
 * @Date: 2021-04-28 17:16:51
 * @Description: MV的详情评论模块
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="MvComment">
    <div class="top"></div>
    <div class="Comments"
         v-if="CommentList.length">
      <div class="title"
           :style="Types.styleType">
        <span class="iconfont"
              :class="Types.iconType" :style="Types.styleType"></span>
        <h2>{{Types.nameType}}评论区</h2>
      </div>
      <div class="list">
        <ul>
          <li v-for="item in CommentList"
              :key="item.id">
            <div class="img">
              <el-image :src="item.user.avatarUrl"></el-image>
            </div>
            <div class="info">
              <h2>
                {{item.user.nickname}}
                <div class="like">
                  <span class="iconfont icon-dianzan">
                    ({{item.likedCount}}) </span>

                  <i>-</i>{{item.time|timeFilter(that)}}
                </div>
              </h2>
              <div class="cont">
                {{item.content}}
                <div class="beReplied"
                     v-if="item.beReplied.length">
                  <p v-for="item in item.beReplied"
                     :key="item.beRepliedCommentId">
                    <span>@{{item.user.nickname}}</span> 回复：{{item.content}}
                  </p>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MvComment",
  components: {},
  data() {
    const TypeArray = [
      {
        nameType: "热门",
        iconType: "icon-HOT",
        styleType: { color: "red", "font-size": "15px" },
      },
      {
        nameType: "最新",
        iconType: "icon-new",
        styleType: { color: "#50ce50", "font-size": "28px" },
      },
    ];
    return {
      Types: this.type == "hot" ? TypeArray[0] : TypeArray[1],
      that: this,
    };
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    CommentList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    timeFilter(time, that) {
      return that.$utils.formatMsgTime(time);
    },
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {
    console.log(this.CommentList.length);
  },
};
</script>

<style lang="less" scoped>
#MvComment {
  margin-top: 30px;

  .top {
    padding-left: 8px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;

    h2 {
      font-size: 18px;
      margin-left: 8px;
      font-weight: 500;
    }

    span {
      font-size: 30px;
    }
  }

  .Comments {
    margin-top: 12px;

    .title {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin-left: 10px;

      h2 {
        font-size: 16px;
        margin-left: 10px;
        font-weight: 500;
      }
    }

    .list {
      margin-top: 18px;

      ul {
        li {
          display: flex;
          flex-wrap: nowrap;
          margin: 12px 8px 20px 8px;

          .img {
            width: 55px;

            .el-image {
              width: 100%;
              border-radius: 50%;
              box-shadow: 0 0 12px #7b7b7b;
            }
          }

          .info {
            padding-left: 20px;
            width: 100%;

            h2 {
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-between;
              font-size: 15px;

              .like {
                font-size: 12px;
                font-weight: 500;
                color: #7b7b7b;

                span {
                  margin: 0 1px;
                  font-size: 16px;
                }

                i {
                  margin: 0 2px 0 8px;
                }
              }
            }

            .cont {
              padding: 4px 8px;
              margin-top: 12px;
              font-size: 14px;
              background-color: #f7f7f7;
              line-height: 1.5;

              .beReplied {
                background-color: #fff;
                padding: 3px 12px;
                margin: 0px 4px;

                p {
                  margin: 10px 0;
                  line-height: 1.4;
                  font-size: 12px;

                  span {
                    color: #e22727;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>