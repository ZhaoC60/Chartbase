<template>
  <div class="doughBox">
    <div class="doughnu" ref="chart"></div>
    <div class="rose_legend" v-if="displayModel == 1">
      <div class="legend" v-for="(item, index) in loopData" :key="index">
        <div class="legend_color"></div>
        <div
          class="legend_progress"
          :style="{
            backgroundColor: color[index],
            width: 'calc(' + item.num + ' - 0px)',
          }"
        ></div>

        <!-- :style="{ backgroundColor: color[index], width: item.value> 100? 100: item.value +'%' }" -->
        <div class="legend_name">{{ item.name }}</div>
        <div class="legend_bar"></div>

        <div class="legend_value" :style="{ color: color[index] }">{{ item.num }}</div>
        <div class="legend_num" v-if="0">{{ item.value }}</div>
        <div class="legend_unit" v-if="0">{{ legthunit }}</div>
      </div>
    </div>
    <div class="rectrose_legend" v-if="displayModel == 2">
      <div class="legend" v-for="(item, index) in loopData" :key="index">
        <div class="legend_color" :style="{ backgroundColor: color[index] }"></div>
        <div class="legend_name" :style="{ color: '#aae3ff' }">{{ item.name }}</div>
      </div>
    </div>
    <div class="doughPos" :style="doughPosStyle">
      <li v-for="(item, index) in loopData" :key="index">{{ item.name }}</li>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  props: {
    doughPosStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // 表示图表的个数
    data: {
      type: Array,
      default: () => {
        return [5, 6, 7, 8];
      },
    },
    barWidth: {
      type: [String, Number],
      default: () => {
        return 18;
      },
    },
    displayModel: {
      type: [String, Number],
      default: () => {
        return 1;
      },
    },
    obj: {
      type: Object,
      default: () => {
        return {};
      },
    },
    color: {
      type: Array,
      default: () => {
        return ['#F496AA', '#71C6FF', '#FFE595', '#89AAFF'];
      },
    },

    rowData: {
      type: Array,
      default: () => {
        return [
          { category: '类型1', value: 20 },
          { category: '类型2', value: 30 },
          { category: '类型3', value: 40 },
          { category: '类型4', value: 50 },
        ];
      },
    },
  },
  data() {
    return {
      chartInst: null,
      option: {},
      setTime: null,
      loopData: [],
      num: 0,
      //当前选中的value
      selectedSeries: {
        category: '',
        value: '',
        sum: '',
      },
      sum: 0,
    };
  },
  methods: {
    instantiation() {
      this.chartInst = echarts.init(this.$refs.chart);
      let _this = this;
      this.option = {
        angleAxis: {
          max: 12,
          startAngle: 90,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          minorTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          minorSplitLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          axisPointer: {
            show: false,
          },
        },
        radiusAxis: {
          type: 'category',
          show: false,
        },
        polar: {},
        series: [
          {
            type: 'bar',
            barGap: '75%',
            data: this.data,
            barWidth: this.barWidth,
            animationEasing: 'bounceOut', //初始动画
            itemStyle: {
              normal: {
                // 定制显示（按顺序）
                color: function (params) {
                  return _this.color[params.dataIndex];
                },
                // color:this.dough
              },
            },
            coordinateSystem: 'polar',
          },
        ],
        legend: {
          show: true,
        },
      };
      this.loopData = this.convertData(this.rowData, this.legends);

      this.chartInst.setOption(this.option, true);
    },
    //value转换
    convertData(rowData) {
      this.sum = 0;
      let returnData = [];
      rowData.forEach((d) => {
        this.sum += d.value;
        returnData.push({
          value: d.value,
          name: d.category,
          num: d.value,
          // itemStyle: {
          //   color: legends[d.category]
          // }
        });
      });
      returnData.forEach((d) => {
        d.num = this.sum == 0 ? '0' : ((d.value / this.sum) * 100).toFixed(0) + '%';
      });
      //进度条模式时 倒序排序
      if (this.displayModel == 100000) {
        returnData.sort((a, b) => {
          return b.value - a.value;
        });
      }
      //增加千分位
      if (this.displayModel == 2) {
        let re = /(?=(?!(\b))(\d{3})+$)/g;
        returnData.forEach((r) => {
          r.value = String(r.value).replace(re, ',');
        });
      }
      return returnData;
    },
  },
  mounted() {
    this.instantiation();
  },
  beforeDestroy() {
    echarts.init(this.$refs.chart).dispose();
  },
  watch: {
    dough: {
      handler() {
        this.instantiation();
      },
    },
  },
};
</script>
<style lang="less" scoped>
.doughBox {
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  position: relative;
  .doughnu {
    width: 300px;
    height: 300px;
  }
  .rose_legend {
    position: absolute;
    right: 130px;
    top: 20px;
    width: 260px;
    // position: relative;
    height: 262px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin-top: 5px;
    .legend {
      position: relative;
      margin-bottom: 20px;
      height: 49px;
      // width: 275px;
      display: flex;
      padding-bottom: 6px;
      // border-bottom: 1px solid #24eefc;
      .legend_progress {
        // width: 100%;
        height: 10px;
        position: absolute;
        // left: 16px;
        top: 39px;
      }
      .legend_bar {
        z-index: -2;
        width: 100%;
        position: absolute;
        height: 10px;
        background: #373f5550;
        top: 39px;
      }
      .legend_color {
        width: 10px;
        height: 10px;
        margin-top: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .legend_name {
        font-size: 26px;
        color: #aae3ff;
        font-family: 'PingFang SC';
        // line-height: 56px;
        // margin-left: 15px;
        // width: 52px;
        position: absolute;
        left: 0px;
        top: -9px;
      }
      .legend_num {
        position: absolute;
        // right: 13px;
        // top: -5px;
        font-size: 40px;
        background-image: -webkit-linear-gradient(bottom, #fff, #81bac9);
        -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        font-family: '腾祥智黑简';
        // margin-right: 20px;
        top: -8px;
      }
      .legend_value {
        position: absolute;
        right: 30px;
        top: -5px;
        font-size: 40px;
        color: #dddddd;
        font-family: '腾祥智黑简';
        line-height: 40px;
        // margin-right: 20px;
      }
      .legend_unit {
        position: absolute;
        top: 6px;
        // right: 27px;
        line-height: 22px;
        font-size: 20px;
        color: #14bfff;
        font-family: '微软雅黑';
      }
    }
  }
  .rectrose_legend {
    position: absolute;
    left: 10px;
    top: 24px;
    width: 300px;
    position: relative;
    height: 200px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // margin-top: 5px;
    .legend {
      position: relative;
      height: 28px;
      // width: 275px;
      display: flex;
      padding-bottom: 6px;
      // border-bottom: 1px solid #24eefc;
      .legend_progress {
        // width: 100%;
        height: 10px;
        position: absolute;
        // left: 16px;
        top: 39px;
      }
      .legend_bar {
        z-index: -2;
        width: 100%;
        position: absolute;
        height: 10px;
        background: #373f55;
        top: 39px;
      }
      .legend_color {
        width: 5px;
        height: 20px;
        margin-top: 30px;
        // border-radius: 50%;
        margin-right: 10px;
      }
      .legend_name {
        font-size: 20px;
        color: #aae3ff;
        font-family: '微软雅黑';
        position: absolute;
        left: 16px;
        top: 23px;
      }
      .legend_num {
        position: absolute;
        // right: 13px;
        // top: -5px;
        font-size: 40px;
        background-image: -webkit-linear-gradient(bottom, #fff, #81bac9);
        -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        font-family: '腾祥智黑简';
        // margin-right: 20px;
        top: -8px;
      }
      .legend_value {
        position: absolute;
        right: 100px;
        top: 15px;
        font-size: 40px;
        color: #dddddd;
        font-family: '腾祥智黑简';
        line-height: 40px;
        // margin-right: 20px;
      }
      .legend_unit {
        position: absolute;
        top: 6px;
        // right: 27px;
        line-height: 22px;
        font-size: 20px;
        color: #14bfff;
        font-family: '微软雅黑';
      }
    }
  }
  .doughPos {
    position: absolute;
    left: 84px;
    top: 32px;
    font-size: 20px;
    line-height: 30px;
    font-family: '微软雅黑';
    color: #aae3ff;
    & > li {
      list-style: none;
    }
  }
}
</style>
