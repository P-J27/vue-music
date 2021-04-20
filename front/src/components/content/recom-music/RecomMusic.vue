<template>
  <div id="RecomMusic" class="self-font">
    <h2 class="title"> <i> </i> 推荐歌曲</h2>
    <song-new @getMusic="getMusic" :musicList="musicList"></song-new>

  </div>
</template>

<script>
import SongNew from "components/common/song/songNew/SongNew";
export default {
  name: "RecomMusic",
  components: {
    SongNew,
  },
  data() {
    return {};
  },
  props: {
    musicList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getMusic(MusicId) {
      this.$emit("getMusic", MusicId);
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/base.less";

</style>