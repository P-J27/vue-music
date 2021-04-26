<!--
 * @Author: PJ
 * @Date: 2021-04-19 21:54:16
 * @Description: 排行榜
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="Rank" class="content-width">
    <rank-list :rankList="cloudList" rankName="云音乐特色榜"></rank-list>
    <rank-list :rankList="mediaList" rankName="全球媒体榜"></rank-list>
  </div>
</template>

<script>
// 列表组件
import RankList from 'components/common/rankList/RankList';
//网络请求
import {getTopList} from 'network/home'

export default {
  name: "Rank",
   components:{
     RankList
   },
  data () {
   return {
     cloudList:[],
     mediaList:[]
   }
  },
   props:{},
   methods:{
     getTopListRef(){
       getTopList().then(res=>{
         console.log(res);
         const list = res.list;
         this.cloudList= list
         this.mediaList=list.splice(4,res.list.length)
      

       })
     }
   },
   computed:{},
   created(){
     this.getTopListRef()
   },
   mounted(){},
}
</script>

<style lang="less" scoped>
#Rank {
  margin-top: 25px;

}
</style>