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
              <el-menu-item index="其他组件">
                <router-link class="gorouter" to="/echarts/Other">其他组件</router-link>
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
@keyframes morph {
  0% {
    border-radius: 100px 40px 100px 40px;
  }
  50% {
    border-radius: 40px 100px 40px 100px;
  }
  100% {
    border-radius: 100px 40px 100px 40px;
  }
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
        width: 13rem;
        border-radius: 30px;
        margin-left: -20px;
        display: block;
        text-align: center;
        color: #69cbf2;
        font-size: 1.6rem;
        font-family: '腾祥智黑简';
      }
      .defaultCss {
        text-decoration: none;
        color: inherit;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 16rem;
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
      width: 70rem;
      border-radius: 30px;
      height: 37.5rem;
      color: #fff;
      overflow: auto;
      overflow-x: hidden;
      background-color: #ffffff20 !important;
      border: 0.3rem solid #31aae3;
      // box-shadow: inset 2px 2px 5px 2px rgba(255, 255, 255, 0.1), inset -8px -9px 10px 0px rgba(0, 0, 0, 0.1), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),4px 4px 5px 0px rgba(0, 0, 0, 0.1);

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
    /deep/ .el-menu-item {
      border-radius: 30px;
      margin-bottom: 30px;
      color: #69cbf2;
      font-size: 22px;
      background-color: #fdf2f4;
      box-shadow: 0 0.2rem 3.2rem hsla(236, 63%, 33%, 0.37);
      border-radius: 1rem;
      box-shadow: 0px 0px 0px 7px hsl(199, 76%, 54%), 0px 7px 0px 7px hsl(201, 80%, 40%), 0px 15px 15px 10px #0003;
      cursor: pointer;
      border-radius: 100px 40px 100px 40px;
      margin-bottom: 2.3rem;
    }
    /deep/ .el-menu-item:hover {
      border-radius: 30px;
      margin-bottom: 2.3rem;
      transition: all 0.15s ease-in-out;
      z-index: 2;
      animation: 0.8s morph ease infinite;
    }
    /deep/ .el-menu-item.is-active {
      color: #eeaf0e;
      background-color: #69cbf2 !important;
      transition: all 0.15s ease-in-out;
      color: #fdf2f4;
      z-index: 2;
      > a {
        color: #fdf2f4;
      }
    }
  }
}
</style>
