(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yourComponent"],{

/***/ "a9e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/BarChart.vue?vue&type=template&id=520f3133&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "chart",
    staticClass: "bar-chart",
    style: _vm.styleBarChart,
    on: {
      "mousemove": _vm.mousemove,
      "mouseleave": _vm.mouseleave
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/BarChart.vue?vue&type=template&id=520f3133&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/BarChart.vue?vue&type=script&lang=js

/* harmony default export */ var BarChartvue_type_script_lang_js = ({
  props: {
    styleBarChart: {
      type: Object,
      default: () => {
        return {
          width: '500px',
          height: '300px'
        };
      }
    },
    xtype: {
      type: String,
      default: 'category'
    },
    ytype: {
      type: String,
      default: 'value'
    },
    maxData: {
      type: Number,
      default: 300
    },
    coloreBarChart: {
      type: Array,
      default: () => {
        return ['#00BFFF', '#73FFFF'];
      }
    },
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '0601',
          value: '10'
        }, {
          name: '0602',
          value: '20'
        }, {
          name: '0603',
          value: '50'
        }, {
          name: '0604',
          value: '20'
        }, {
          name: '0605',
          value: '30'
        }, {
          name: '0606',
          value: '45'
        }, {
          name: '0607',
          value: '12'
        }, {
          name: '0608',
          value: '23'
        }];
      }
    },
    chartStylr: {
      type: Object,
      default: () => {
        return {
          unit: '单位：人次',
          barWidth: 20
        };
      }
    },
    gridData: {
      type: Object,
      default: () => {
        return {
          top: '20%',
          bottom: '13%',
          left: '10%',
          right: '10%'
        };
      }
    }
  },
  data() {
    return {
      chartInst: null,
      option: {},
      setTime: null
    };
  },
  methods: {
    instantiation() {
      this.chartInst = this.$echarts.init(this.$refs.chart);
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        grid: this.gridData,
        xAxis: {
          type: this.xtype,
          data: [],
          axisLine: {
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 14,
            interval: 0
          }
        },
        yAxis: {
          type: this.ytype,
          name: this.chartStylr.unit,
          // max: this.maxData,
          nameTextStyle: {
            fontSize: 14,
            padding: [0, 0, 0, 35] // 四个数字分别为上右下左与原位置距离
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisLabel: {
            fontSize: 14,
            interval: 0
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0.1)', 'rgba(238,238,238,0)']
            }
          }
        },
        series: [{
          data: [],
          avoidLabelOverlap: false,
          type: 'bar',
          barWidth: this.chartStylr.barWidth,
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: this.coloreBarChart[0]
            }, {
              offset: 1,
              color: this.coloreBarChart[1]
            }])
          }
        }]
      };
    },
    rowDataChart() {
      let name = [];
      let value = [];
      this.rowData.forEach(val => {
        name.push(val['name']);
        value.push(val['value']);
      });
      this.option.xAxis.data = name;
      this.option.series[0].data = value;
      this.chartInst.setOption(this.option, true);
    },
    tooltipShuffling() {
      //
      clearInterval(this.setTime);
      let count = 0;
      this.setTime = setInterval(() => {
        if (count == this.rowData.length) {
          count = 0;
        }
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count
        });
        count++;
      }, 1000);
    },
    mousemove() {
      clearInterval(this.setTime);
    },
    mouseleave() {
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.rowData.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    }
  },
  mounted() {
    this.instantiation();
    this.rowDataChart();
    this.tooltipShuffling();
    this.mousemove();
    this.mouseleave();
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    this.$echarts.init(this.$refs.chart).dispose();
  },
  watch: {
    rowData: {
      handler() {
        this.instantiation();
        this.rowDataChart();
        this.tooltipShuffling();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/BarChart.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_BarChartvue_type_script_lang_js = (BarChartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/BarChart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _01_BarChartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "520f3133",
  null
  
)

/* harmony default export */ var BarChart = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=yourComponent.b29504a2.js.map