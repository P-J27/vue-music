<!--
 * @Author: PJ
 * @Date: 2021-04-28 20:38:06
 * @Description: MV页的过滤器
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
-->
<template>
  <div id="MvFilter">
    <div class="filter filter-language">
      <ul>
        <li v-for="(item,index) in languageFilter"
            :key="index"
            @click="selectLanguage(item)"
            :class="item.label===languageActive ? 'active':''">
          {{item.label}}
        </li>
      </ul>
    </div>
    <div class="filter filter-source">
      <ul>
        <li v-for="(item,index) in sourceFilter"
            :key="index"
            @click="selectSource(item)"
            :class="item.label===sourceActive ? 'active':''">
          {{item.label}}
        </li>
      </ul>
    </div>
    <div class="filter filter-grateful">
      <ul>
        <li v-for="(item,index) in gratefulFilter"
            :key="index"
            @click="selectGrateful(item)"
            :class="item.label===gratefulActive ? 'active':''">
          {{item.label}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "MvFilter",
  components: {},
  data() {
    return {};
  },
  props: {
    languageFilter: {
      type: Array,
      default() {
        return [];
      },
    },
    sourceFilter: {
      type: Array,
      default() {
        return [];
      },
    },
    gratefulFilter: {
      type: Array,
      default() {
        return [];
      },
    },
    languageActive: {
      type: String,
      default: "",
    },
    sourceActive: {
      type: String,
      default: "",
    },
    gratefulActive: {
      type: String,
      default: "",
    },
  },
  methods: {
        selectLanguage(item) {
        this.$emit('changeType',{
          type:'language',
          value:item.value,
          label:item.label
        })
      },
      selectSource(item) {
        this.$emit('changeType',{
          type:'source',
          value:item.value,
          label:item.label
        })
      },
      selectGrateful(item) {
        this.$emit('changeType',{
          type:'grateful',
          value:item.value,
          label:item.label
        })
      },
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#MvFilter {
  .filter {
    margin: 10px 2px;
    height: 50px;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      justify-content: left;
      align-items: center;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 8px;
        padding: 0px;
        width: 60px;
        height: 30px;
        border-radius: 10px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
  .active {
    color: #fff;
    background-color: #ea482c;
  }
}
</style>
