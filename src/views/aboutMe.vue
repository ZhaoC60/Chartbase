<template>
  <div class="about">
    <div class="title">
      <img src="../assets/img/title.png" alt="" />
    </div>

    <div class="content">
      <div id="wall">
        <ul>
          <li>
            <div>
              <h2>自我简介</h2>
              <div class="biaoti">
                <p class="title">昵称：</p>
                <p class="name">赵得柱</p>
              </div>
              <div class="biaoti">
                <p class="title">生辰：</p>
                <p class="name">1998.10.30</p>
              </div>
              <div class="biaoti">
                <p class="title">工作<br />经历：</p>
                <p class="name">在前公司担任前端工程师职位，工作两年，从事可视化信息开发方向。</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h2>个人技能</h2>
              <vue-seamless-scroll :data="listData" :class-option="optionSetting" class="seamless-warp">
                <ul class="item">
                  <li v-for="item in listData" :key="item">{{ item.title }}</li>
                </ul>
              </vue-seamless-scroll>
            </div>
          </li>
          <li>
            <div>
              <h2>关于我的</h2>
              <div class="biaoti">
                <p class="name"><b>我的爱好：</b>听歌、画画、玩游戏</p>
              </div>
              <div class="biaoti">
                <p class="name"><b>喜欢的奶茶：</b>各种茉莉茶底的奶茶，少冰全糖加珍珠！</p>
              </div>
              <div class="biaoti">
                <p class="name"><b>喜欢的歌手：</b>玛丽莲曼森、Lady Gaga</p>
              </div>
              <div class="biaoti">
                <p class="name"><b>喜欢的歌手：</b>玛丽莲曼森、Lady Gaga</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h2>电影推荐</h2>
              <div class="biaoti">
                <p class="name">
                  &nbsp;&nbsp;&nbsp;&nbsp;电锯惊魂系列、招魂系列、死寂、不安的种子、鬼影实录、山村老尸、继续活下去的5个故事、撕裂人、失眠、非自然死亡、海妖的呼唤：火之岛生存战等。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h2>周日：</h2>
              <p>下班前记得把桌面的文档整理好，项目文件记得要备份。还有很多BUG要改！悲催的程序员</p>
            </div>
          </li>
          <li>
            <div>
              <h2>备注：</h2>
              <p>下班前记得把桌面的文档整理好，项目文件记得要备份。还有很多BUG要改！悲催的程序员</p>
            </div>
          </li>
        </ul>
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
    optionSetting() {
      return {
        step: 0.2, // 数值越⼤速度滚动越快
        limitMoveNum: 8, // 开始⽆缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启⿏标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        waitTime: 10000, // 单步运动停⽌的时间(默认值1000ms)
      };
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.about {
  width: 100%;
  // background-color: #1ed3a3;
  background-image: linear-gradient(to bottom, #023a90, #609ec5);
  padding-top: 70px;
  // height: 820px;
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
  }
  .content {
    width: 85%;
    height: 70vh;
    margin: 0 auto;
    margin-top: 162px;
    font-family: '腾祥智黑简';
    /* wall */
    #wall {
      width: 82%;
      height: auto;
      margin: 40px auto;
      .seamless-warp {
        height: 90%;
        overflow: hidden;
        .item {
          width: 100%;
          > li {
            width: 350px;
            margin: 0 0 10px 0;
            text-align: left;
          }
        }
      }
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
        // overflow: hidden;
        background-color: #fff;
        // padding: 1em 2em 3em 5em;

        li {
          width: 30%;
          margin: 2.2em 0;
          // display: flex;
          // flex-wrap: wrap;
          margin-right: 4%;
          list-style: none;
          float: left;
          > div {
            width: 100%;
            height: 230px;
            background: #cefcc5;
            color: #000;
            padding: 1em; /* 阴影处理 */
            box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.9);
            -webkit-transform: rotate(-5deg);
            box-sizing: border-box;
            border: 10px solid #7bd87b;
            position: relative;
          }
          h2 {
            font-size: 18px;
            font-weight: bold;
            padding: 5px;
          }
          p {
            line-height: 30px;
            font-size: 14px;
            text-align: left;
          }
          // &:nth-child(even) > div {
          //   -webkit-transform: rotate(5deg);
          //   top: 10px;
          //   background: #e3e5f7;
          // }
          &:nth-child(2n) > div {
            -webkit-transform: rotate(5deg);
            top: -10px;
            background: #ffffc3;
          }
        }
        li:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
    // #wall ul li:nth-child(5n) > div {
    //   -webkit-transform: rotate(5deg);
    //   background: #c6fdd6;
    // }
    #wall ul li > div:hover {
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
      -webkit-transform: scale(1.25);
      z-index: 111;
      -webkit-transition: -webkit-transform 0.2s linear;
    }
  }
}
</style>
