<!--
 * @Author: PJ
 * @Date: 2021-04-20 21:31:36
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="RecomSongList" class="self-font">
    <h2 class="tilte"><em></em> 推荐歌单</h2>
    <song-sheet :sheetList="songList"></song-sheet>

  </div>
</template>

<script>
import SongSheet from "components/common/song/songSheet/SongSheet";

export default {
  name: "RecomSongList",
  components: {
    SongSheet,
  },
  props: {
    //查询推荐歌单
    songList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url('@/assets/css/base.less');
</style>