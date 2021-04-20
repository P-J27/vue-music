<template>
  <div id="Index">
    <el-container class="container">
      <el-header>

        <Header></Header>
      </el-header>
      <el-main>
        

        <router-view> </router-view>
      </el-main>
      <el-footer>
        55
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "components/common/layout/header/Header";

export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
  },
};
</script>

<style scoped>
div .el-header {
  padding: 0;
  text-align: center;
}

div .el-footer {
  padding: 0;
}

#Index {
  background-color: rgb(245, 245, 245);
  position: relative;
  /*overflow-x: hidden;*/
}
</style>