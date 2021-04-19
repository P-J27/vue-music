<template>
  <div id="Header">
    <div class="header">
      <div class="logo">logo</div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="changeItem('Find')">发现音乐
        </el-menu-item>
        <el-menu-item index="2" @click="changeItem('Rank')">排行榜
        </el-menu-item>
        <el-menu-item index="3" @click="changeItem('SongList')">歌单
        </el-menu-item>
        <el-menu-item index="4" @click="changeItem('Singer')">歌手
        </el-menu-item>
        <el-menu-item index="5" @click="changeItem('MV')">MV</el-menu-item>
      </el-menu>

      <div class="search">搜索</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    changeItem(itemName) {
      //   this.$router.push(path)
      this.$router.push({
        name: itemName,
      });
    },
  },
};
</script>
<style lang="less" scoped>
#Header {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 70px;
  box-shadow: 0 5px 35px -1px rgba(2, 10, 38, 0.1);
  margin: 0 auto;
  z-index: 9;
  background: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}


.logo {
  width: 200px;

  img {
    width: 100%;
  }
}

div .el-menu {
  border-bottom: 0px;

  .el-menu-item {
    padding: 0 30px;
    font-weight: 700;
  }
}

.searchBtn {
  &:hover {
    color: rgb(84, 154, 171);
  }
}
.active {
  colro: red;
}
//个人 下拉菜单
.person {
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-icon-arrow-down {
    font-size: 12px;
    background-color: #fff;
  }
}

.input {
  margin-right: 25px;
  .el-input {
  }
}
</style>