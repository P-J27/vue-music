<!--
 * @Author: PJ
 * @Date: 2021-04-26 10:23:13
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="SongLists">
    <song-sheet :imageUrlAttr="'song'"
                :sheetList="sheetList"></song-sheet>

  </div>
</template>

<script>
import SongSheet from "components/common/song/songSheet/SongSheet";
export default {
  name: "SongLists",
  components: { SongSheet },
  data() {
    return {};
  },
  props: {
    sheetList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>

</style>