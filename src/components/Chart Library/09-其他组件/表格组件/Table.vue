<template>
  <div class="table">
    <ul class="FJ_GZZDYJLB_Nav" :style="{ height: TableStyle.NavHeight, width: TableStyle.TableWidth }">
      <li v-for="(item, index) of NavData" :key="index" :style="{ lineHeight: TableStyle.NavlineHeight, marginTop: TableStyle.NavTop }">{{ item }}</li>
    </ul>
    <div :style="{ width: TableStyle.TableWidth }" class="swiper_wraper FJ_GZZDYJLB_Content" @mouseenter="enterSwiper" @mouseleave="leaveSwiper">
      <swiper
        v-if="Data.length > 1"
        class="wrap"
        ref="mySwiper"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
      >
        <swiperSlide class="swipe_inner" v-for="(item, index) of Data" :key="index">
          <div>{{ item.id }}</div>
          <div>{{ item.time }}</div>
          <div>{{ item.content }}</div>
          <div>{{ item.status }}</div>
          <div>{{ item.istime }}</div>
        </swiperSlide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    NavData: {
      type: Array,
      default: () => {
        return ['编号', '时间', '详情', '办结情况'];
      },
    },
    TableStyle: {
      type: Object,
      default: () => {
        return {
          TableWidth: '400px',
          NavHeight: '30px',
          NavlineHeight: '30px',
          NavTop: '0px',
        };
      },
    },
    Data: {
      type: Array,
      default: () => {
        return [
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
        ];
      },
    },
  },
  data() {
    return {
      // 轮播图配置
      swiperOptions: {
        direction: 'vertical',
        initialSlide: 0,
        loop: true,
        slidesPerView: 5,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
      },
    };
  },
  methods: {
    enterSwiper() {},
    leaveSwiper() {},
  },
};
</script>

<style lang="less" scoped>
.table {
  width: 408px;
  .FJ_GZZDYJLB_Nav {
    margin-top: 10px;
    width: 408px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    background: #104070;
    padding: 0 20px;
    box-sizing: border-box;
    li {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      font-family: '微软雅黑';
      //   &:nth-child(1) {
      //     width: 71px;
      //   }
      //   &:nth-child(2) {
      //     width: 237px;
      //   }
      //   &:nth-child(3) {
      //     width: 257px;
      //   }
      //   &:nth-child(4) {
      //     width: 222px;
      //   }
    }
  }

  .FJ_GZZDYJLB_Content {
    width: 408px;
    height: 120px;

    .wrap {
      height: 120px;
    }
    .swipe_inner {
      height: 30px !important;
      line-height: 30px;
      box-sizing: border-box;
      background: #104070;
      font-size: 16px;
      color: #bfebff;
      font-family: '微软雅黑';
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      box-sizing: border-box;
      &:nth-child(odd) {
        background: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(even) {
        background: rgba(255, 255, 255, 0.1);
      }
      //   & > div:nth-child(1) {
      //     width: 71px;
      //   }
      //   & > div:nth-child(2) {
      //     width: 237px;
      //   }
      //   & > div:nth-child(3) {
      //     width: 257px;
      //   }
      //   & > div:nth-child(4) {
      //     width: 222px;
      //   }
    }
  }
}
</style>
