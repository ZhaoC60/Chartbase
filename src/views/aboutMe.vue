<template>
  <div class="about">
    <div class="title">
      <img src="../assets/img/about.png" alt="" />
    </div>

    <div class="content">
      <div id="wall">
        <div class="swiper">
          <el-carousel ref="carousel" arrow="always" :interval="3000" height="32.5rem">
            <el-carousel-item v-for="item in 2" :key="item">
              <ul v-for="(i, ind) in 8" :key="ind" :class="{ evenLi: (ind + 1) % 2 == 0 }">
                <li>
                  <div>
                    <img :src="require(`../assets/img/pic${ind + 1}.jpg`)" alt="" />
                  </div>
                </li>
              </ul>
            </el-carousel-item>
          </el-carousel>
          <div @click="prev" class="prev"><img src="../assets/img/prev.png" alt="" /></div>
          <div @click="next" class="next"><img src="../assets//img/next.png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeName: '1',
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' },
      ],
      listData: [
        {
          title: '1.精通 HTML、CSS、JavaScript 技能，熟悉页面结构和布局，能够按需实现页面效果；',
        },
        {
          title: '2. 熟练掌插 HTML5 技术开发、ES6 语法，响应式布局和弹性盒子布局以及 DIV+CSS 布局；',
        },
        {
          title: '3. 熟练使用 jQuery 库，Bootstrap 的等框架；',
        },
        {
          title: '4. 熟练使用 vue 全家桶，并熟练运用 Vant、ElementUI 等组件库；',
        },
        {
          title: '5. 熟练使用 ECharts 的大数据可视化开发； ',
        },
        {
          title: '6. 熟练使用css的预处理语言less；',
        },
        {
          title: '7. 熟知微信小程序和 uni-app 开发 ，可以进行基本使用和简单的开发；',
        },
        {
          title: '8. 了解 Node.js、包依赖工具 npm 和以及项目打包工具 webpack 的使用；',
        },
        {
          title: '9. 了解 java 后端语言和 MySQL 数据库。',
        },
      ],
      skillsData: [
        {
          name: 'HTML+CSS',
          val: 92,
        },
        {
          name: 'JavaScript',
          val: 90,
        },
        {
          name: 'VUE',
          val: 90,
        },
        {
          name: 'draw',
          val: 96,
        },
        {
          name: 'play game',
          val: 100,
        },
      ],
    };
  },
  components: {},
  computed: {
    // optionSetting() {
    //   return {
    //     step: 0.2, // 数值越⼤速度滚动越快
    //     limitMoveNum: 8, // 开始⽆缝滚动的数据量 this.dataList.length
    //     hoverStop: true, // 是否开启⿏标悬停stop
    //     direction: 1, // 0向下 1向上 2向左 3向右
    //     openWatch: true, // 开启数据实时监控刷新dom
    //     waitTime: 10000, // 单步运动停⽌的时间(默认值1000ms)
    //   };
    // },
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style lang="less" scoped>
.about {
  width: 100%;
  // background-color: #1ed3a3;
  background-color: #252525;
  background-image: linear-gradient(to bottom, #023a90, #609ec5);
  padding-top: 3.5rem;
  // height: 820px;
  // background: url('../assets/img/bg.png');
  background-size: contain;

  .title {
    > img {
      width: 45%;
      // margin-top: -60px;
      z-index: 9;
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -25%);
    }
    > p {
      font-style: 120px;
      font-family: '腾祥智黑简';
      color: #ffffc3;
      position: absolute;
      left: 50%;
      top: 2%;
      transform: translate(-50%, -50%);
    }
  }
  .content {
    width: 80rem;
    height: 34rem;
    margin: 0 auto;
    margin-top: 6.8rem;
    font-family: '腾祥智黑简';
    /* wall */
    #wall {
      width: 70rem;
      height: auto;
      margin: 40px auto;

      .biaoti {
        display: flex;
        .title {
          width: 50px;
          white-space: nowrap;
          text-align: left;
        }
        .title,
        .name {
          color: #555;
          font-size: 18px;
          text-align: left;
          font-weight: 900;
        }
        .name {
          font-weight: normal;
        }
      }
      ul {
        background-color: #fff;
        li {
          width: 15rem;
          height: 12.5rem;
          margin: 2.2em 0 -0.7rem 1rem;
          // display: flex;
          // flex-wrap: wrap;
          list-style: none;
          float: left;
          > div {
            width: 100%;
            height: 230px;
            background: #e876a7;
            color: #fef2f4;
            // padding: 1em; /* 阴影处理 */
            box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.5);
            -webkit-transform: rotate(-5deg);
            box-sizing: border-box;
            border: 10px solid #dd3688;
            position: relative;
            overflow: hidden;
            img {
              width: 100%;
              height: auto;
            }
          }

          //  &:nth-child(2n) > div {
          //    -webkit-transform: rotate(5deg);
          //    top: -10px;
          //    background: #fef2f4 !important;
          //  }
        }
      }
      .evenLi li div {
        -webkit-transform: rotate(5deg);
        top: -10px;
        background: #fef2f4 !important;
      }
      .swiper {
        height: 30rem;
        width: 70rem;
        box-sizing: border-box;
        padding-left: 3rem;
        /deep/ .el-carousel__indicators {
          .el-carousel__button {
            width: 1rem;
            height: 1rem;
            margin: 0 0.2rem;
            border-radius: 50%;
          }
          .el-carousel__indicator.is-active button {
            background-color: #dd3688;
            opacity: 1;
          }
          .el-carousel__indicator button {
            background-color: #f993b8;
            opacity: 1;
          }
        }
        /deep/ .el-carousel__arrow {
          display: none;
        }
        .prev {
          position: absolute;
          left: 5rem;
          top: 22rem;
        }
        .next {
          position: absolute;
          right: 5rem;
          top: 22rem;
        }
        .prev,
        .next {
          cursor: pointer;
          img {
            width: 8rem;
          }
        }
      }
    }

    #wall ul li > div:hover {
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
      -webkit-transform: scale(1.1);
      z-index: 111;
      -webkit-transition: -webkit-transform 0.2s linear;
    }
  }
}
</style>
