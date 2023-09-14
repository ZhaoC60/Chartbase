<template>
  <div class="zt">
    <div class="picBox">
      <div>
        <DuoZhuTu2 :width="'500px'" :height="'290px'"></DuoZhuTu2>
        <button class="button button--block" @click="copyImportedFileContent('DuoZhuTu2')">复制代码</button>
      </div>
      <div>
        <PictorialSingleBar :width="'500px'" :height="'290px'"></PictorialSingleBar>
        <button class="button button--block" @click="copyImportedFileContent('PictorialSingleBar')">复制代码</button>
      </div>
      <div class="fgx"></div>
      <div>
        <DuoZhuTu :width="'500px'" :height="'290px'"></DuoZhuTu>
        <button class="button button--block" @click="copyImportedFileContent('DuoZhuTu')">复制代码</button>
      </div>
      <div>
        <StackDuoZhuTu :width="'500px'" :height="'290px'"></StackDuoZhuTu>
        <button class="button button--block" @click="copyImportedFileContent('StackDuoZhuTu')">复制代码</button>
      </div>
      <div class="fgx"></div>
      <div>
        <CylindricalPlot :width="'500px'" :height="'300px'"></CylindricalPlot>
        <button class="button button--block" @click="copyImportedFileContent('CylindricalPlot')">复制代码</button>
      </div>
      <div>
        <BarChart3D :width="'500px'" :height="'300px'"></BarChart3D>
        <button class="button button--block" @click="copyImportedFileContent('BarChart3D')">复制代码</button>
      </div>
      <div class="fgx"></div>
      <div>
        <HengTwoBarCharts :width="'500px'" :height="'320px'"></HengTwoBarCharts>
        <button class="button button--block" @click="copyImportedFileContent('HengTwoBarCharts')">复制代码</button>
      </div>
      <div>
        <CycloneChart :width="'500px'" :height="'320px'"></CycloneChart>
        <button class="button button--block" @click="copyImportedFileContent('CycloneChart')">复制代码</button>
      </div>
      <div class="fgx"></div>
      <div>
        <BubbleBar :width="'550px'" :height="'320px'"></BubbleBar>
        <button class="button button--block" @click="copyImportedFileContent('BubbleBar')">复制代码</button>
      </div>
      <div style="width: 530px"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import StackDuoZhuTu from '../../components/Chart Library/02-柱图/02-多柱图/StackDuoZhuTu.vue';
import DuoZhuTu2 from '../../components/Chart Library/02-柱图/02-多柱图/DuoZhuTu2.vue';
import DuoZhuTu from '../../components/Chart Library/02-柱图/02-多柱图/DuoZhuTu.vue';
import PictorialSingleBar from '../../components/Chart Library/02-柱图/01-单柱图/PictorialSingleBar.vue';
import CylindricalPlot from '../../components/Chart Library/02-柱图/01-单柱图/CylindricalPlot.vue';
import BarChart3D from '../../components/Chart Library/02-柱图/01-单柱图/BarChart3D.vue';
import HengTwoBarCharts from '../../components/Chart Library/02-柱图/03-堆叠主图/HengTwoBarCharts.vue';
import CycloneChart from '../../components/Chart Library/02-柱图/09-蝴蝶柱图/CycloneChart.vue';
import BubbleBar from '../../components/Chart Library/02-柱图/10-Svg气泡柱图/BubbleBar.vue';
export default {
  name: 'App',
  components: { DuoZhuTu2, PictorialSingleBar, DuoZhuTu, StackDuoZhuTu, CylindricalPlot, BarChart3D, HengTwoBarCharts, CycloneChart, BubbleBar },
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
        .get(`../../../data/柱图/文本/${val}.txt`)
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
    // padding-bottom: 50px;
    .fgx {
      height: 4px;
      width: 91%;
      margin: 12px auto;
      background-color: #ffffff10;
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
