<!--
 * @Author: PJ
 * @Date: 2021-04-23 09:46:57
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="MusicList">
    <el-table :data="musicList"
              stripe
              @row-click="playMusic"
              style="width:100%">
      <el-table-column show-overflow-tooltip
                       type="index"
                       label="序号">
      </el-table-column>

      <el-table-column show-overflow-tooltip
                       prop="name"
                       label="歌名"></el-table-column>
      <el-table-column show-overflow-tooltip
                       prop="ar[0].name"
                       label="歌手">

        <!-- vue2.6后用v-solt -->
        <template slot-scope="scope">
          <!--利用作用域插槽将所有歌手显示-->
          <span v-for="(item,index) in scope.row.ar"
                :key="index">
            <span v-if="index != 0"> / </span>{{item.name}}
          </span>

        </template>
      </el-table-column>

      <el-table-column show-overflow-tooltip
                       prop="al.name"
                       label="专辑"></el-table-column>

      <el-table-column show-overflow-tooltip
                       prop="dt"
                       label="时长">
        <template slot-scope="scope">
          {{$utils.formatSecondTime(scope.row.dt / 1000)}}
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {
  name: "MusicList",
  components: {},
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
      playMusic(row){
          this.$emit("getMusic", row.id);
      }
  },
  computed:{
      
  },
  created(){},
  mounted(){},
};
</script>

<style lang="less" scoped>
#MusicList {
    width: 100%;
    .el-table {
      cursor: pointer;
    }
}
</style>