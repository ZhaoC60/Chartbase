<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-18 21:27:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-07-18 23:22:09
 * @FilePath: \webpage\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <!-- <Nav /> -->
    <div class="main" :class="notFound ? '' : 'nomargin'">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// import Nav from './components/Nav.vue';
export default {
  name: 'App',
  data() {
    return {
      navData: [],
      menu: [],
      notFound: '',
    };
  },
  components: {
    // Nav,
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {
    this.$store.commit('setRouter', this.$router.currentRoute.path);
    let that = this;
    that.menu = this.$router.options.routes.filter((item) => {
      that.navData.push(item.path);
    });
  },
  watch: {},
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  // overflow-x: hidden;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: '碳纤维正中黑简体';
  .main {
    background-color: #000;
    width: 100%;
    height: 100%;
  }
}
@font-face {
  font-family: '腾祥智黑简';
  src: url('./assets/font/腾祥智黑简.TTF');
}
.footer {
  width: 100%;
  height: 50px;
  background-color: #000;
  position: absolute;
  bottom: 0;
}
</style>
