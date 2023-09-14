<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-18 21:27:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-11 16:24:57
 * @FilePath: \webpage\src\views\ChartLibraryView\Zhexian.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="zx">
    <div class="picBox">
      <div>
        <ChartLineArea :width="'500px'" :height="'300px'"></ChartLineArea>
        <div class="btn">
          <button class="button button--block" @click="copyImportedFileContent(1)">复制代码</button>
          <!-- <a class="button button--block" href="../../../public/data/折线图/文件/ChartLineArea">下载代码</a> -->
        </div>
      </div>
      <div>
        <DuoZhexianTu :width="'500px'" :height="'300px'"></DuoZhexianTu>
        <button class="button button--block" @click="copyImportedFileContent(2)">复制代码</button>
      </div>
      <!-- <div class="fgx"></div> -->
      <div>
        <LineCharts :width="'500px'" :height="'300px'"></LineCharts>
        <button class="button button--block" @click="copyImportedFileContent(3)">复制代码</button>
      </div>
      <div>
        <LineChartsXuxian :width="'500px'" :height="'300px'"></LineChartsXuxian>
        <button class="button button--block" @click="copyImportedFileContent(4)">复制代码</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ChartLineArea from '../../components/Chart Library/01-折线图/02-单折现面积图/ChartLineArea.vue';
import DuoZhexianTu from '../../components/Chart Library/01-折线图/03-多折线图/DuoZhexianTu.vue';
import LineChartsXuxian from '../../components/Chart Library/01-折线图/03-多折线图/LineCharts+xuxian.vue';
import LineCharts from '../../components/Chart Library/01-折线图/03-多折线图/LineCharts.vue';
// import ChartLineAreaTxt from '../../assets/copyText/ChartLineArea.txt';
export default {
  name: 'App',
  components: { ChartLineArea, DuoZhexianTu, LineCharts, LineChartsXuxian },
  data() {
    return {};
  },
  mounted() {
    // this.getLDFSSS();
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    // getLDFSSS() {},
    copyImportedFileContent(val) {
      let jsonName = '';
      switch (val) {
        case 1:
          jsonName = 'ChartLineArea';
          break;
        case 2:
          jsonName = 'DuoZhexianTu';
          break;
        case 3:
          jsonName = 'LineCharts';
          break;
        case 4:
          jsonName = 'LineChartsXuxian';
          break;
        default:
          break;
      }
      axios
        .get(`../../../data/折线图/文本/${jsonName}.txt`)
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
.zx {
  .picBox {
    width: 100%;
    border-radius: 30px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 15px;
    justify-content: space-around;
    .btn {
      display: flex;
    }
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
