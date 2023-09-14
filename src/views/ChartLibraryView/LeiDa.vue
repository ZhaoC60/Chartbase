<template>
  <div class="zt">
    <div class="picBox">
      <div>
        <LeiDaBar :width="'280px'" :height="'300px'"></LeiDaBar>
        <button class="button button--block" @click="copyImportedFileContent(1)">复制代码</button>
      </div>
      <div>
        <YibiaopanTu :dataRatio="water" :style="{ width: '182px', height: '120px' }"></YibiaopanTu>
        <button class="button button--block" @click="copyImportedFileContent(1)">复制代码</button>
      </div>
      <div class="fgx"></div>
    </div>
  </div>
</template>
<script>
import LeiDaBar from '../../components/Chart Library/04-雷达图/01-基础雷达图/LeiDaBar.vue';
import YibiaopanTu from '../../components/Chart Library/05-仪表盘/半圆仪表盘/YibiaopanTu.vue';
export default {
  name: 'App',
  components: { LeiDaBar, YibiaopanTu },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    copyImportedFileContent() {
      import(/* webpackChunkName: "yourComponent" */ '../../components/Chart Library/02-柱图/01-单柱图/BarChart.vue')
        .then(() => {
          const componentCode = `123 `;
          navigator.clipboard
            .writeText(componentCode)
            .then(() => {
              alert('文件内容已成功复制！请检索删除【这个要删除哦】字段哦！');
            })
            .catch((err) => {
              console.error('复制文件内容失败：', err);
            });
        })
        .catch((err) => {
          console.error('加载文件失败：', err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.zt {
  .picBox {
    width: 100%;
    height: 800px;
    border-radius: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: 60px;
    // padding-bottom: 50px;
    > div {
      width: 50%;
      height: 370px;
    }
    .fgx {
      height: 4px;
      width: 91%;
      margin: 12px auto;
      background-color: #ffffff10;
      margin-left: 0px;
      margin-top: 10px;
    }

    // 按钮样式

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 100px;
      cursor: pointer;
      margin: 0 auto;
      margin-top: 15px;
    }

    .button--block {
      font-family: '碳纤维正中黑简体';
      transform: translate3d(-7px, -7px, 0);
      transition-property: box-shadow, transform;
      transition-duration: 0.3s;
      color: #e7e7e7;
      border-radius: 10px;
      border: 4px solid #2489ce;
      background-color: #409eff;
      box-shadow: 7px 7px 2px 0px #33333360;
    }

    .button--block:active {
      transform: translate3d(-5px, -5px, 0);
      box-shadow: 5px 5px 0px 0px #33333390;
    }
    button {
      width: 100px;
      height: 40px;
      border: none;
      font-size: 18px;
    }
  }
}
</style>
