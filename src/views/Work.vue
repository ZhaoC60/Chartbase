<!--
 * @Author: 赵姐
 * @Date: 2023-11-28 17:13:33
 * @LastEditTime: 2023-11-29 19:47:20
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
-->
<template>
  <div class="work">
    <div class="tel">
      <img src="../assets/img/tel.png" alt="" />
    </div>
    <div class="menu">
      <div class="title">
        <p>工作经历</p>
        <p>Work experience</p>
      </div>
      <div class="content">
        <div class="con-l">
          <button v-for="(item, ind) in caidan" class="title-btn" :class="{ 'tab--active': actIndex == ind }" :key="ind" @click="clickBtn(item, ind)">
            {{ item.title }}
          </button>
        </div>
        <!-- 关于我的 -->
        <div class="con-r" v-show="actIndex == 0">
          <p>出生年日：1998-10-30</p>
          <p>电话：15136960887</p>
          <p>毕业院校：郑州财经学院/<small>软件工程专业</small></p>
          <p>邮箱：zhaooo1030@163.com</p>
          <p>
            自我评价：本人具有很强的学习能力，对前端开发也非常热爱，能积极学习新技术并运用；性格开朗，待人真诚，与同事和睦相处。善于沟通，有团队合作精神，具备一定组织协调能力。工作认真负责，积极乐观向上，
            心态好，自律性较强。
          </p>
        </div>
        <!-- 工作经历 -->
        <div class="con-r" v-show="actIndex == 1">
          <div v-for="(item, ind) in [WorkExperience[page]]" :key="ind" style="font-size: 1.2rem; line-height: 1.8rem; justify-content: space-between">
            <p>
              <b>{{ item.companyName }}</b
              >({{ item.time }})
            </p>
            <div v-html="item.cont"></div>
          </div>

          <div class="page">
            <el-pagination layout="prev, pager, next" :page-size="1" @current-change="handleCurrentChange" :total="WorkExperience.length"> </el-pagination>
          </div>
        </div>
        <!-- 掌握技能 -->
        <div class="con-r" v-show="actIndex == 2" style="font-size: 1.2rem; line-height: 2rem">
          1.精通 HTML5、CSS3 和 JavaScript，能够按需实现页面结构与布局； <br />2.熟练掌握 ES6 语法，能够使用最新的 JavaScript 特性开发高效易维护的代码；<br />
          3.熟练使用jQuery 库，Bootstrap 的等框架；<br />4.熟练使用 Vue 全家桶，包括 Vue.js、Vue Router和Vuex，能够灵活运用Vant、ElementUI等组件库；
          <br />5.熟练使用 ECharts的大数据可视化开发； <br />6.熟练使用 CSS 预处理语言 LESS 和 SASS，提高样式代码的可维护性和复用性；
          <br />7.熟练使用版本控制工具 P4V、Git等进行团队协作和代码管理； <br />8.熟悉微信小程序和 uni-app 开发 ，可以进行基本使用和简单的开发； <br />9.了解
          Node.js、包依赖工具 npm 和以及项目打包工具 webpack的使用； <br />10.了解 java 后端语言和 MySQL 数据库。
        </div>
        <!-- 项目经历 -->
        <div class="con-r" v-show="actIndex == 3">
          <div v-for="(item, ind) in [project[proPage]]" :key="ind" style="font-size: 0.9rem; line-height: 1.5rem; justify-content: space-between">
            <p>
              <b>{{ item.name }}</b
              >({{ item.time }})
            </p>
            <p>{{ item.jianjie }}</p>
            <div v-html="item.rwms"></div>
          </div>

          <div class="page">
            <el-pagination layout="prev, pager, next" :page-size="1" @current-change="proHandleCurrentChange" :total="project.length"> </el-pagination>
          </div>
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
      caidan: [
        {
          id: 0,
          title: '关于我的',
        },
        {
          id: 1,
          title: '工作经历',
        },
        {
          id: 2,
          title: '专业技能',
        },
        {
          id: 3,
          title: '项目经历',
        },
      ],
      actIndex: 0,
      content: '',
      WorkExperience: [
        {
          companyName: '郑州朵朵计算机科技有限公司',
          time: '2021.5-2021.07',
          cont: ' <p>1.根据UI设计图，使用DIV+CSS技术进行精细的网页布局，确保网页的呈现效果符合设计要求。</p><p>2.使用JavaScript和CSS技术，根据需求完成复杂的交互效果和动画，提升用户使用体验。</p> <p>3.参与了与后端开发人员的紧密合作，定义了清晰的接口规范，解决了数据传递和交互的难题，确保了前后端数据的准确对接。</p> <p>4.通过与团队成员的紧密合作，成功消除了网页中的bug，并对页面进行了持续的优化。</p>',
        },
        {
          companyName: '北京数字冰雹信息技术有限公司',
          time: '2021.8-2023.08',
          cont: ' <p>1.需求实现与技术应用：与后端UI同事紧密配合，充分理解产品需求，并利用JavaScript、CSS、Less和Vue等前端技术，实现项目需求。我成功地运用技术能力为多个项目提供了高质量的解决方案。</p><p>2.数据可视化开发：我参与了数据可视化项目的开发，主要负责使用Echarts库绘制图表，以及实现图表与UE4场景的交互。我不仅对图表和数据进行了有效的处理，也实现了良好的用户体验。</p> <p>3.接口规范制定与数据交互：我与后端人员紧密合作，定义了清晰的接口规范，解决了数据传递和交互的难题，确保了前后端数据的准确对接。</p> <p>4.团队协作与优化：与其他团队成员、产品经理、设计师和后端开发人员紧密合作，成功完成了多个项目的开发和维护任务。我积极参与团队协作，消除网页bug优化了页面性能，并确保了顺利完成与第三方对接的任务。</p>',
        },
      ],
      page: 0,
      proPage: 0,
      project: [
        {
          name: '开封阀门企业站＋移动端',
          time: '2021.05-2021.07',
          jianjie: '此项目是一个全面的网站开发项目，展示开封阀门公司的企业文化、主要运营产品以及进行线上商品销售与展示。',
          rwms: '1.根据设计师提供的设计稿，我对页面布局进行了细致的规划；<br />2.使用Vue.js框架搭建整个项目结构，结合ElementUI库来快速构建页面的各个组件。同时还使用jQuery和JavaScript来添加一些额外的动态效果，提升用户体验；<br />3.PC端和移动端采用了rem布局来实现自适应效果，确保网站在各种屏幕尺寸下都能保持良好的可读性和易用性；<br />4.通过与后端进行紧密合作，我负责处理前后端的数据交互。我使用axios库来处理异步请求，获取并渲染页面所需的数据，并将相关的接口文件统一管理，以提高代码的可维护性和可读性；<br />最后，我将PC端和移动端的代码进行了整合，确保两个平台上的网站能够在数据和功能上保持一致性。',
        },
        {
          name: '“健康长江泰州行动”运行管理系统',
          time: '2021.08-2021.11',
          jianjie:
            '该项目旨在建设一个综合管理系统，包括五大板块：长江体检表、专项行动、决策分析、应急管理和社会监督。系统利用真实地理信息系统，对沿江大范围地理态势和重点区域进行精细化复现。',
          rwms: '1.页面布局：我根据设计师提供的设计稿，精确地实现了页面的布局和显示效果。这包括了利用Vue.js框架搭建项目结构，配置Echarts以绘制各种图表并展示数据；<br />2.地图开发：我们使用了公司的UE产品来绘制地图，并使用API开发了地图的相关功能，实现了图表与地图的联动。我负责与后端沟通，明确了数据结构和所需的字段，整理了接口文档，减少了数据处理的时间和复杂性；<br />3.数据交互:与后端进行了紧密的联调，使用axios调用接口获取数据，实现前后端数据的交互。并制定了一些接口对接方式和书写规范，方便后续的维护和管理。',
        },
        {
          name: '许昌莲城智能体运行管理中心',
          time: '2021.11-2022.02',
          jianjie:
            '本项目旨在构建一个智慧大脑运行中心，集成了城市治理、生态环保、政务服务、经济运行、交通运行等六个专题模块。通过监测中心、决策中心、指挥中心、预警中心和服务中心的整合，提升城市运营管理能力，推动城市在经济、生活、治理等方面全面数字化转型。',
          rwms: '1.页面布局：我根据设计师提供的设计稿，精确地实现了页面的布局和显示效果。这包括了利用Vue.js框架搭建项目结构；<br />2.组件开发：使用AppCube低代码aPaaS平台进行单个组件的开发。在开发过程中，我开放了组件的公用属性，增加了组件的复用率；<br />3.接口调用：使用了AppCube的桥接器来进行数据的调用和采集，确保数据的准确性和及时性。',
        },
        {
          name: '济南市城市运行管理服务平台',
          time: ' 2022.05-2022.10',
          jianjie:
            '系统采取两套地图模块，一是公司的三维UE产品，二是Cesium二维地图。整体规划了城市治理、生态环保、政务服务、经济运行、交通运行六大专题模块，构建集监测中心、决策中心、指挥中心、预警中心及服务中心为一体的智慧大脑运行中心。',
          rwms: '1.页面布局：我根据设计师提供的设计稿，精确地实现了页面的布局和显示效果。这包括了利用Vue.js框架搭建项目结构，并使用Echarts来绘制各种图表并展示数据；<br />2.三维地图开发：我使用了公司的UE产品来绘制三维地图，并使用API开发了地图的相关功能，实现了图表与地图的联动。同时，我还使用Cesium进行了二维地图的相关功能开发；<br />3.视频对接：我使用hls.js封装组件进行了视频对接，从而确保了视频的顺畅播放和稳定的用户体验；4.数据交互:与后端进行了紧密的联调，使用axios调用接口获取数据，实现前后端数据的交互。并制定了一些接口对接方式和书写规范，方便后续的维护和管理。',
        },
        {
          name: '上海天然气管网运维中心',
          time: '2022.11-2023.07',
          jianjie: '上海天然气管网运维，将天然气管道用模型进行编号规整以便记录管理，实时监控管道运维。',
          rwms: '1.页面布局：根据设计师的设计稿，我精确实现了页面的布局和显示效果。利用Vue.js框架搭建了项目结构，并使用Echarts库来绘制各种图表以可视化管道运维数据；<br />2.三维地图开发：使用公司的UE产品绘制三维地图，并使用API开发了地图的相关功能，实现了图表与地图的联动。这些功能帮助我们更好地理解和展示天然气管道的运维数据；<br />3.视频对接：通过使用海康平台插件封装了视频数据对接，我确保了视频数据的准确性和及时性。这对于监控天然气管道运行状态至关重要；<br />4.数据处理与计算：由于管网运维涉及大量数据，且计算逻辑复杂，与后端开发团队沟通需求、定义接口规范，使用axios进行页面数据的渲染，并制定了一些接口对接方式书写规范，方便后续的维护和管理。',
        },
        {
          name: '惠州仲恺社会治理平台',
          time: ' 2023.05-2023.08',
          jianjie: '该项目旨在构建惠州仲恺社会治理平台，致力于提升重点人员管理的效率，并促进各区域之间的沟通与协作。',
          rwms: '1.根据设计师提供的设计稿，我对页面布局进行了精确的实现，同时确保了显示效果符合要求。利用Vue.js框架搭建了项目结构，并使用Echarts库绘制了各类城市数据图表；<br />2. 通过使用公司的UE产品，我成功绘制了三维地图并开发了相关功能，实现了图表与地图之间的联动。这些功能为分析城市数据提供了直观的支持；<br />3. 与海康平台进行合作，我利用插件封装了视频数据对接功能，确保了数据的准确性和及时性。<br />4. 与后端开发团队沟通需求、定义接口规范，参与接口设计、联调接口、解决跨域问题。并整合了对讲功能的接口。这些接口可以发起对讲、视频对讲、多人对讲等操作，并将通话数据存储在后端提供的数据库接口中。同时，保留了群组数据以方便下次发起对讲操作；<br />5. 与后端进行了紧密的联调，使用axios调用接口获取数据，实现前后端数据的交互。并制定了一些接口对接方式和书写规范，方便后续的维护和管理。',
        },
      ],
    };
  },
  methods: {
    clickBtn(item, ind) {
      this.actIndex = ind;
      console.log(ind, 'ind');
    },
    handleCurrentChange(val) {
      this.page = val - 1;
      console.log(this.WorkExperience[this.page], '哈哈');
    },
    proHandleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.proPage = val - 1;
      console.log(this.project[this.proPage], '哈哈');
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

.work {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #4481b6;
  .tel {
    position: absolute;
    left: -3rem;
    z-index: 2;
    top: 1rem;
    > img {
      width: 24rem;
      height: auto;
      transform: rotate(-5deg);
    }
  }
  .menu {
    width: 80%;
    height: 37rem;
    position: absolute;
    left: 50%;
    top: 47%;
    background-color: #053e92;
    transform: translate(-50%, -50%);
    box-shadow: 0 0.8rem 3.2rem hsla(236, 63%, 33%, 0.37);
    border-radius: 1rem;
    box-shadow: 0px 0px 0px 10px hsl(331, 72%, 54%), 0px 10px 0px 10px hsl(330, 80%, 40%), 0px 20px 20px 10px #0003;
    cursor: pointer;
    border-radius: 100px 40px 100px 40px;

    .title {
      margin-top: 1rem;
      width: 100%;
      font-size: 1.5rem;
      line-height: 1.8rem;
      font-family: '腾祥智黑简';
      color: #de3588;
    }
    .content {
      display: flex;
      width: 90%;
      height: 30rem;
      margin: 0 auto;
      .con-l {
        width: 28%;
        height: 26rem;
        margin-top: 1.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        border-radius: 0.3rem;
        .title-btn {
          font-size: 1.6rem;
          height: 4.5rem;
          width: 14rem;
          background: #e7e6d2;
          font-family: '腾祥智黑简';
          border: none;
          border-radius: 0.3rem;
          cursor: pointer;
          color: #ea75aa;
          transform: translateY(0);
          transition: transform 0.15s ease-in-out;
          box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.4);
          text-shadow: 0px 1px 1px #000000;
          box-shadow: 0px 0px 0px 10px hsl(331, 72%, 54%), 0px 10px 0px 10px hsl(330, 80%, 40%), 0px 20px 20px 10px #0003;
          cursor: pointer;
          border-radius: 100px 40px 100px 40px;
        }
        .title-btn:hover {
          transform: translateY(0rem);
          transition: all 0.15s ease-in-out;
          z-index: 2;
          animation: 0.8s morph ease infinite;
        }
        .tab--active {
          transform: translateY(0rem);
          background-color: #ea75aa;
          transition: all 0.15s ease-in-out;
          z-index: 2;
          color: #fdf2f4;
        }
      }
      .con-r {
        margin-top: 1.1rem;
        width: 72%;
        height: 26rem;
        background-color: #e7e6d2;
        border: 0.5rem solid hsl(331, 72%, 54%);
        border-radius: 100px 40px 100px 40px;

        color: #ea75aa;
        font-family: '腾祥智黑简';
        font-size: 1.3rem;
        line-height: 2.2rem;
        text-align: left;
        box-sizing: border-box;
        padding: 1.8rem;
        > p {
          margin-bottom: 0.5rem;
        }
        .page {
          position: absolute;
          right: 7.5rem;
          bottom: 6rem;
          /deep/ .el-pager li {
            background-color: #ffffff00;
            color: #333;
          }
          /deep/ .el-pager li:hover {
            color: #ea75aa;
          }
          /deep/ .el-pager li.active {
            color: #ea75aa;
          }
          /deep/ .el-pagination .btn-next,
          /deep/ .el-pagination .btn-prev {
            background: center center no-repeat #ffffff00;
          }
        }
      }
    }
  }
}
</style>
