<template>
  <div id="RecomSongList" class="self-font">
    <h2 class="tilte"><i></i> 推荐歌单</h2>
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