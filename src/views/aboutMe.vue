<template>
  <div class="about">
    <div class="title">
      <img src="../assets/img/about.png" alt="" />
    </div>
    <div class="menu">
      <div>
        <div class="btn"><router-link class="button button--block" to="/">首页</router-link></div>
        <div class="btn"><router-link class="button button--block" to="/echarts/zhexian">图表库</router-link></div>
      </div>
      <div>
        <div class="btn"><router-link class="button button--block" to="/work">工作经历</router-link></div>
        <div class="btn"><a href="https://blog.csdn.net/m0_46415203?type=blog">CSDN</a></div>
      </div>
    </div>

    <div class="content">
      <div id="wall">
        <div class="swiper">
          <el-carousel ref="carousel" arrow="always" :interval="3000" height="32.5rem">
            <el-carousel-item v-for="(item, index) in 2" :key="item">
              <ul v-for="(i, ind) in 8" :key="ind" :class="{ evenLi: (ind + 1) % 2 == 0 }">
                <li>
                  <div>
                    <el-image
                      :fit="cover"
                      style="width: 100%; height: auto"
                      :src="require(`../assets/img/pic${index + 1}-${ind + 1}.jpg`)"
                      :preview-src-list="[require(`../assets/img/pic${index + 1}-${ind + 1}.jpg`)]"
                    >
                    </el-image>
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
@keyframes morph {
  0% {
    border-radius: 100px 40px 100px 40px;
  }
  50% {
    border-radius: 40px 100px 40px 100px;
  }
  100% {
    border-radius: 100px 40px 100px 40px;
  }
}

@keyframes floatEven {
  0% {
    -webkit-transform: translateY(0.7rem);
    transform: translateY(0.7rem);
  }
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(0.7rem);
    transform: translateY(0.7rem);
  }
}
@keyframes float {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(0.7rem);
    transform: translateY(0.7rem);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.about {
  width: 100%;
  // background-color: #1ed3a3;
  background-color: #252525;
  background-image: linear-gradient(to bottom, #023a90, #609ec5);
  padding-top: 3.5rem;
  // height: 820px;
  // background: url('../assets/img/bg.png');
  background-size: contain;
  .menu {
    position: absolute;
    top: 4.5rem;
    width: 100%;
    height: 15rem;
    display: flex;
    box-sizing: border-box;
    padding: 0 7rem;
    justify-content: space-between;
    > div {
      width: 20rem;
      height: 10rem;
      display: flex;
      justify-content: space-around;
      > div:nth-child(2n) {
        animation: floatEven ease-in-out 2s infinite;
      }
      > div:nth-child(2n-1) {
        animation: float ease-in-out 2s infinite;
      }
      .btn {
        width: 6rem;
        color: #de3587;
        height: 3rem;
        line-height: 3rem;
        font-family: '腾祥智黑简';
        font-size: 1.5rem;
        font-weight: 900;
        background-color: pink;
        text-shadow: 0px 1px 1px #000000;
        box-shadow: 0px 0px 0px 0.5rem hsl(331, 72%, 54%), 0px 0.5rem 0px 0.5rem hsl(330, 80%, 40%), 0px 20px 20px 0.5rem #0003;
        cursor: pointer;
        border-radius: 1.2rem;
        a {
          color: inherit;
          text-decoration: none;
        }
        &:hover {
          transform: translateY(0rem);
          transition: all 0.15s ease-in-out;
          z-index: 2;
          animation: 1.5s morph ease infinite;
        }
      }
    }
  }
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
        > .el-image {
          -webkit-transform: rotate(0deg);
        }
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
