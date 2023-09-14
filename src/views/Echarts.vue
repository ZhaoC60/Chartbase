<template>
  <div class="tubiao">
    <div class="main">
      <div class="pic">
        <router-link class="btnHome" to="/"></router-link>
        <img src="../assets/img/home.png" alt="" />
      </div>
      <div class="left">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu default-active="折线图" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose">
              <el-menu-item index="折线图">
                <router-link class="gorouter" to="/echarts/zhexian">折线图</router-link>
              </el-menu-item>
              <el-menu-item index="柱图">
                <router-link class="gorouter" to="/echarts/ZhuTu">柱图</router-link>
              </el-menu-item>
              <el-menu-item index="饼图">
                <router-link class="gorouter" to="/echarts/pieChart">饼图</router-link>
              </el-menu-item>
              <el-menu-item index="雷达图">
                <router-link class="gorouter" to="/echarts/LeiDa">雷达图</router-link>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="right"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routes: '/',
    };
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      //   this.routes = '/' + key;
      //   console.log(this.routes, 'this.routes');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
  color: #e9e9e9;
}
.tubiao {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #3265a2, #8bb6ee);
  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #3265a2, #8bb6ee);

    .echartsImg {
      margin: -8px 5px 0 0;
    }
    .pic {
      position: absolute;
      bottom: 32px;
      left: 10px;
      z-index: 9;
      > img {
        width: 320px;
        // height: 200px;
      }
      .btnHome {
        position: absolute;
        bottom: 121px;
        width: 50px;
        height: 50px;
        left: 236px;
        border-radius: 50%;
        background-color: #00000030;
        cursor: pointer;
      }
    }
    > .left {
      width: 15%;
      .gorouter {
        height: 55px;
        width: 250px;
        border-radius: 30px;
        margin-left: -20px;
        display: block;
      }
      .defaultCss {
        text-decoration: none;
        color: inherit;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 300px;
        height: 100vh;
        padding-top: 50px;
        padding-left: 50px;
        box-sizing: border-box;
      }
      /deep/ .el-menu-item-group__title {
        display: none;
      }
    }
    .right {
      width: 76%;
      border-radius: 30px;
      height: 83%;
      color: #fff;
      overflow: auto;
      overflow-x: hidden;
      background-color: #ffffff20 !important;

      // border: 10px dashed #053893;
      position: absolute;
      left: 58%;
      top: 46.5%;
      transform: translate(-50%, -50%);
    }
    /deep/ .el-menu {
      border: none;
      background-color: #ffffff00;
    }
    // /deep/ .el-submenu {
    //   background-color: #eeaf0e;
    //   border-radius: 30px;
    //
    // }
    /deep/ .el-menu-item {
      border-radius: 30px;
      background-color: #eeaf0e00;
      margin-bottom: 30px;
      color: #e9e9e9;
      font-size: 22px;
    }
    /deep/ .el-menu-item:hover {
      border-radius: 30px;
      background-color: #ecf5ff30;
      margin-bottom: 30px;
    }
    /deep/ .el-menu-item.is-active {
      color: #eeaf0e;
      background-color: #8e8eee !important;
      > a {
        color: #fcbc02;
      }
    }
  }
}
</style>
