<template>
  <div class="zt">
    <div class="picBox">
      <div>
        <ChartPie :width="'280px'" :height="'300px'"></ChartPie>
        <button class="button button--block" @click="copyImportedFileContent('ChartPie')">复制代码</button>
      </div>
      <div>
        <locaLoopChart :width="'280px'" :height="'300px'"></locaLoopChart>
        <button class="button button--block" @click="copyImportedFileContent('locaLoopChart')">复制代码</button>
      </div>
      <div class="fgx"></div>
      <div style="margin-top: -30px">
        <DeiFenHuan :width="'280px'" :height="'200px'"></DeiFenHuan>
        <button class="button button--block" @click="copyImportedFileContent('DeiFenHuan')">复制代码</button>
      </div>
      <div style="margin-top: -30px">
        <roseCharts :width="'300px'" :height="'300px'"></roseCharts>
        <button class="button button--block" @click="copyImportedFileContent('roseCharts')">复制代码</button>
      </div>
      <div class="fgx"></div>
      <div>
        <DoughnutChart :width="'300px'" :height="'300px'"></DoughnutChart>
        <button style="margin-top: -50px" class="button button--block" @click="copyImportedFileContent('DoughnutChart')">复制代码</button>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import roseCharts from '../../components/Chart Library/03-饼图/03-玫瑰图/roseCharts.vue';
import ChartPie from '../../components/Chart Library/03-饼图/01-基础饼图/ChartPie.vue';
import locaLoopChart from '../../components/Chart Library/03-饼图/01-基础饼图/locaLoopChart.vue';
import DeiFenHuan from '../../components/Chart Library/03-饼图/01-基础饼图/DeiFenHuan.vue';
import DoughnutChart from '../../components/Chart Library/03-饼图/04-多环图/DoughnutChart.vue';
export default {
  name: 'App',
  components: { ChartPie, locaLoopChart, DeiFenHuan, roseCharts, DoughnutChart },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    copyImportedFileContent(val) {
      axios
        .get(`../../../data/饼图/文本/${val}.txt`)
        .then((res) => {
          const componentCode = res.data;
          navigator.clipboard
            .writeText(componentCode)
            .then(() => {
              alert('组件内容已成功复制！');
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
      color: #fdf2f4;
      border-radius: 10px;
      border: 4px solid #31aae3;
      background-color: #69cbf2;
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
