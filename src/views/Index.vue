<template>
  <div class="sy">
    <div class="scrollText">
      <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
          <li v-for="item in newsList" v-text="item.title" :key="item"></li>
        </ul>
      </vue-seamless-scroll>
    </div>
    <div class="center">
      <div class="shop">
        <div class="house">
          <div><img src="../assets/img/house1.png" alt="" /></div>
        </div>
        <div class="itemBtn">
          <div class="button-container"><router-link class="button button--block" to="/echarts/zhexian">图表库</router-link></div>

          <div class="button-container"><router-link class="button button--block" to="/work">工作经历</router-link></div>
          <div class="button-container"><a class="button button--block" href="./data/other/赵晓会-15136960887.pdf" target="_blank">我的简历</a></div>
          <div class="button-container"><a class="button button--block" href="https://blog.csdn.net/m0_46415203?type=blog">CSDN</a></div>
          <!-- <div class="button-container"><router-link class="button button--block" to="/aboutMe">自恋画展</router-link></div> -->
          <div><div class="button button--block" style="opacity: 0"></div></div>
        </div>
      </div>
    </div>
    <img class="zsj" src="../assets/img/zsj.png" alt="" />
    <div class="card">
      <img class="camera" src="../assets/img/camera.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newsList: [
        {
          title: '',
        },
        {
          title: '我要写一个很很长很长长的句子不然我看不到滚动的效果，我不知道这么长够不够长，但是我决定还是再写点句子要足够长才行。',
        },
      ],
    };
  },
  mounted() {},
  watch() {},
  computed: {
    optionLeft() {
      return {
        direction: 2,
        limitMoveNum: 2,
      };
    },
  },
};
</script>

<style lang="less" scoped>
:root {
  --btn-width: 150px;
  --btn-height: 75px;
  --red: #d20404;
  --light-orange: #fff1c5;
  --fast: 0.3s;
}
.sy {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #023a90, #609ec5);
  // 滚动
  .scrollText {
    width: 100%;
    height: 35px;
    .seamless-warp2 {
      overflow: hidden;
      height: 2rem;
      padding-top: 10px;
      width: 100%;
      margin: -20px auto;
      ul.item {
        width: 1000px;
        color: #eeaf0e;
      }
    }
  }
  .zsj {
    position: absolute;
    left: 0;
    top: 40px;
    width: 100px;
    height: 100px;
  }

  .card {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 50px;
    background-color: #eeaf0e;
    .camera {
      width: 300px;
      position: absolute;
      bottom: -35px;
      left: 10px;
    }
  }
  .center {
    width: 100%;
    height: 500px;
    position: absolute;
    bottom: 150px;
    overflow: hidden;
    .shop {
      .house {
        width: 100%;
        height: 100%;
        background-color: #fff;
        text-align: center;
        div {
          position: absolute;
          left: 50%;
          bottom: -0.5rem;
          transform: translate(-50%, 0);
          width: 70rem;
          > img {
            width: 70rem;
            margin: 0 auto;
          }
        }
      }
      .itemBtn {
        display: flex;
        width: 33rem;
        justify-content: space-between;
        position: fixed;
        top: 41%;
        left: 35rem;
        .button-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          color: black;
          cursor: pointer;
        }

        .button--block {
          width: 4rem;
          height: 2.6rem;
          margin-top: 10px;
          font-family: '腾祥智黑简';
          text-decoration: none;
          transform: translate3d(-15px, -15px, 0);
          transition-property: box-shadow, transform;
          transition-duration: 0.3s;
          border: 4px solid #31aae3;
          background-color: #b6daff;
          box-shadow: 5px 5px 2px 0px #33333360;
        }
      }
    }
  }
}
</style>
