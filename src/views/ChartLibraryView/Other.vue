<template>
  <div class="zt">
    <div class="picBox">
      <div>
        <Table></Table>
        <button class="button button--block" style="margin: 30px 0 0 200px" @click="copyImportedFileContent('Table')">复制代码</button>
      </div>
      <div>
        <VideoCommon></VideoCommon>
        <button class="button button--block" @click="copyImportedFileContent('VideoCommon')">复制代码</button>
      </div>
      <!-- <div class="fgx"></div> -->
      <!-- <div>
        <Water></Water>
        <button class="button button--block" @click="copyImportedFileContent(1)">复制代码</button>
      </div> -->
      <div style="margin: 70px 0 0 -120px">
        <treeChart style="transform: scale(0.87)"></treeChart>
        <button class="button button--block" @click="copyImportedFileContent(1)">复制代码</button>
      </div>
      <div style="margin: 70px 0 0 -120px">
        <RectangleChart style="transform: scale(0.87)"></RectangleChart>
        <button class="button button--block" @click="copyImportedFileContent(1)">复制代码</button>
      </div>
    </div>
  </div>
</template>
<script>
import Table from '../../components/Chart Library/09-其他组件/表格组件/Table.vue';
// import Water from '../../components/Chart Library/10-水球图/普通水球图/Water';
import VideoCommon from '../../components/Chart Library/09-其他组件/视频组件/VideoCommon';
import treeChart from '../../components/Chart Library/11矩形树图/背景树图/treeChart.vue';
import RectangleChart from '../../components/Chart Library/11矩形树图/普通树图/RectangleChart';
import axios from 'axios';
export default {
  name: 'App',
  components: { Table, VideoCommon, treeChart, RectangleChart },
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
        .get(`./data/other/文本/${val}.txt`)
        .then((res) => {
          // 获取要复制的内容
          var textArea = document.createElement('textarea');
          textArea.value = res.data;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          // 提示复制成功
          alert('内容已复制到剪贴板');
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
    height: 650px;
    border-radius: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: 60px;
    // padding-bottom: 50px;
    > div {
      width: 50%;
      height: 280px;
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
