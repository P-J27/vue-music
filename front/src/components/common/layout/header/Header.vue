<template>
  <div id="Header">
    <div class="header content-width">
      <div class="logo">
        <img src="~/assets/img/logo.png" alt="">
      </div>
      <el-menu :default-active="activeIndex" active-text-color="rgb(84,154,171)" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="find" @click="changeItem('Find')">发现音乐
        </el-menu-item>
        <el-menu-item index="rank" @click="changeItem('Rank')">排行榜
        </el-menu-item>
        <el-menu-item index="songList" @click="changeItem('SongLists')">歌单
        </el-menu-item>
        <el-menu-item index="singer" @click="changeItem('Singer')">歌手
        </el-menu-item>
        <el-menu-item index="MV" @click="changeItem('MV')">MV</el-menu-item>
      </el-menu>

      <div class="search">
        <el-row :gutter="30">
          <el-col :span="25">
            <el-input placeholder="音乐 / 歌手 / 歌单 / mv" clearable v-model="inputValue" @keyup.enter.native="toSearch">
              <el-button class="searchBtn" size="mini" slot="append" icon="el-icon-search" @click="toSearch"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex:'find',
      inputValue:''
    };
  },
  methods: {
    toSearch(){

    },
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
  z-index: 9;
  min-width: 1200px;
  margin: 0 auto;
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
    //  width: 100%;
     height: 70px;
     
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
  color: red;
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

.search {
  margin-right: 25px;
  .el-input {
  }
}
</style>