<template>
  <div class="cs-dashboard" :style="{ width: width, height: height }">
    <div class="chart" :style="{ width: width, height: height }" ref="chart" @mouseover="mouseover" @mouseleave="mouseleave"></div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '500px',
    },
    height: {
      type: String,
      default: '500px',
    },
    rowData: {
      type: Array,
      default: () => {
        return [
          {
            uid: '周一',
            value: 1,
          },
          {
            uid: '周二',
            value: 2,
          },
          {
            uid: '周三',
            value: 3,
          },
          {
            uid: '周四',
            value: 4,
          },
        ];
      },
    },
    color: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA', '#71C6FF', '#FFE595', '#051839', '#E6C84F'];
      },
    },
    barWidth: {
      type: String,
      default: () => {
        return '20';
      },
    },
    fontStyle: {
      type: Object,
      default: () => {
        return {
          color: '#BFEBFF',
          fontSize: 20,
          fontFamily: 'PingFang',
          interval: 0,
        };
      },
    },
    seriesObj: {
      type: Array,
      default: () => {
        return [
          {
            name: 'A',
            stack: 'a',
          },
          {
            name: 'B',
            stack: 'b',
          },
        ];
      },
    },
  },
  data() {
    return {
      radiusAxisData: [],
      seriesData: [],
      chartInst: null,
    };
  },
  mounted() {
    const that = this;
    let max = 0;
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach((item) => {
        this.radiusAxisData.push(item.uid);
        this.seriesData.push(item.value);
        if (item.value > max) {
          max = item.value;
        }
      });
      //为效果好看追加最大值防止圆环闭环
      this.seriesData.push((max *= 1.1));
    }
    that.initChart();
    that.tooltipShuffling();
    that.mouseover();
    that.mouseleave();
  },
  methods: {
    initChart() {
      const that = this;
      that.chartInst = this.$echarts.init(this.$refs.chart);
      that.option = {
        angleAxis: {
          show: false,
          splitLine: {
            show: false,
          },
        },
        legend: {
          show: true,
          data: ['周一', '周二', '周三', '周四'],
        },
        color: that.color,
        radiusAxis: {
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: that.fontStyle,
          type: 'category',
          data: that.radiusAxisData,
          z: 10,
        },
        polar: {
          center: ['50%', '50%'],
        },
        tooltip: {
          show: false,
          position: 'center',
        },
        series: [
          {
            type: 'bar',
            barWidth: that.barWidth,
            data: that.seriesData,
            coordinateSystem: 'polar',
            name: that.seriesObj.name,
            stack: that.seriesObj.stack,
            emphasis: {
              focus: 'series',
              itemStyle: {
                color: '#71C6FF',
              },
            },
            legendHoverLink: true,
          },
          // {
          //   type: 'bar',
          //   barWidth: that.barWidth,
          //   data: that.seriesData,
          //   coordinateSystem: 'polar',
          //   name: that.seriesObj[1].name,
          //   stack: that.seriesObj[1].stack,
          //   emphasis: {
          //     focus: 'series',
          //   },
          //   legendHoverLink: true,
          // },
        ],
      };
      that.chartInst.setOption(that.option);
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      let currentIndex = -1;
      this.setTime = setInterval(() => {
        let dataLen = this.seriesData.length;
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        currentIndex = (currentIndex + 1) % (dataLen - 1); //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
      }, 2000);
    },
    mouseover() {
      clearInterval(this.setTime);
    },
    mouseleave() {
      this.tooltipShuffling();
    },
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      hendler() {
        this.radiusAxisData = [];
        this.seriesData = [];
        // let max = 0;
        this.rowData.forEach((item) => {
          this.radiusAxisData.push(item.uid);
          this.seriesData.push(item.value);
          //   if (item.value > max) {
          //     max = item.value;
          //   }
        });
        // this.seriesData.push((max *= 1.1));
        this.tooltipShuffling();
        this.initChart();
      },
    },
  },
};
</script>
<style lang="less" scoped>
.cs-dashboard {
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: all;
}
</style>
