﻿export default [
  // 生态环境
  {
    mode: '生态环境',
    mutex: false,
    layers: [
      {
        name: '空气监测站点',
        imgUrl: './img/legend/legend-ecology-Airsxt.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '重点排污单位',
        imgUrl: './img/legend/legend-ecology-zdpw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '巡航无人机',
        imgUrl: './img/legend/legend-traffic-wrj.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '公园',
        imgUrl: './img/legend/legend-ecology-park.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '森林',
        imgUrl: './img/legend/legend-ecology-forest.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '绿地',
        imgUrl: './img/legend/legend-ld.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '饮用水源地监测站点',
        imgUrl: './img/legend/legend-ecology-water.png',
        highlight: false,
        texthighlight: false,
        children: [
          {
            name: '水质-I类',
            imgUrl: './img/legend/legend-ecology-water-I.png',
            highlight: false,
          },
          {
            name: '水质-II类',
            imgUrl: './img/legend/legend-ecology-water-II.png',
            highlight: false,
          },
          {
            name: '水质-III类',
            imgUrl: './img/legend/legend-ecology-water-III.png',
            highlight: false,
          },
          {
            name: '水质-IV类',
            imgUrl: './img/legend/legend-ecology-water-IV.png',
            highlight: false,
          },
          {
            name: '水质-V类',
            imgUrl: './img/legend/legend-ecology-water-V.png',
            highlight: false,
          },
          {
            name: '水质-劣V类',
            imgUrl: './img/legend/legend-ecology-water-badV.png',
            highlight: false,
          },
          {
            name: '水质-无数据',
            imgUrl: './img/legend/legend-ecology-water-none.png',
            highlight: false,
          },
        ],
      },
      {
        name: '摄像头',
        imgUrl: './img/legend/legend-sxt.png',
        highlight: false,
        children: [],
      },
      {
        name: '噪音探测器',
        imgUrl: './img/legend/legend-sthj-zaoying.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '告警点位',
        imgUrl: './img/legend/legend_zhili_gjdw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '区域划分',
        imgUrl: '',
        highlight: false,
        texthighlight: false,
        children: [],
      },
    ],
  },
  // 经济发展
  {
    mode: '经济发展',
    mutex: false,
    layers: [
      {
        name: '重点企业',
        imgUrl: './img/legend/legend-eco-zdqy.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '规上企业',
        imgUrl: './img/legend/legend-eco-gsqy.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '小微企业',
        imgUrl: './img/legend/legend-eco-xwqy.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '重点项目',
        imgUrl: './img/legend/legend-eco-zdxm.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '产业园区',
        imgUrl: './img/legend/legend-eco-cyyq.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '企业分布',
        imgUrl: '',
        highlight: false,
        texthighlight: false,
        children: [],
      },
    ],
  },
  // 应急值守
  {
    mode: '应急值守',
    mutex: false,
    layers: [
      {
        name: '摄像头',
        imgUrl: './img/legend/legend-ldzh-sxt.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: 'AI摄像头',
        imgUrl: './img/legend/legend-ldzh-aisxt.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '避难场所',
        imgUrl: './img/legend/legend-ldzh-bncs.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '应急物资',
        imgUrl: './img/legend/legend-ldzh-yjwz.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '风险隐患',
        imgUrl: './img/legend/legend-ldzh-fxyh.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '事件点位',
        imgUrl: './img/legend/legend-ldzh-sjdw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '防护目标',
        imgUrl: './img/legend/legend-ldzh-fhmb.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '公安人员',
        imgUrl: './img/legend/legend-ldzh-gary.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '消防员',
        imgUrl: './img/legend/legend-ldzh-xfy.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '医务人员',
        imgUrl: './img/legend/legend-ldzh-ywry.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '专家队伍',
        imgUrl: './img/legend/legend-ldzh-zjdw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '救援队伍',
        imgUrl: './img/legend/legend-ldzh-jydw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '救护车辆',
        imgUrl: './img/legend/legend-ldzh-jhcl.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '消防车',
        imgUrl: './img/legend/legend-ldzh-xfc.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '运输车',
        imgUrl: './img/legend/legend-ldzh-ysc.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '告警点位',
        imgUrl: './img/legend/legend_zhili_gjdw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '事件分布',
        highlight: false,
        texthighlight: false,
        children: [],
      },
    ],
  },
  // 应急指挥
  {
    mode: '应急指挥',
    mutex: false,
    layers: [
      {
        name: '摄像头',
        imgUrl: './img/legend/legend-ldzh-sxt.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: 'AI摄像头',
        imgUrl: './img/legend/legend-ldzh-aisxt.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '避难场所',
        imgUrl: './img/legend/legend-ldzh-bncs.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '应急物资',
        imgUrl: './img/legend/legend-ldzh-yjwz.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '风险隐患',
        imgUrl: './img/legend/legend-ldzh-fxyh.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '事件点位',
        imgUrl: './img/legend/legend-ldzh-sjdw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '防护目标',
        imgUrl: './img/legend/legend-ldzh-fhmb.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '公安人员',
        imgUrl: './img/legend/legend-ldzh-gary.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '消防员',
        imgUrl: './img/legend/legend-ldzh-xfy.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '医务人员',
        imgUrl: './img/legend/legend-ldzh-ywry.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '专家队伍',
        imgUrl: './img/legend/legend-ldzh-zjdw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '救援队伍',
        imgUrl: './img/legend/legend-ldzh-jydw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '救护车辆',
        imgUrl: './img/legend/legend-ldzh-jhcl.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '消防车',
        imgUrl: './img/legend/legend-ldzh-xfc.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '运输车',
        imgUrl: './img/legend/legend-ldzh-ysc.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
      {
        name: '告警点位',
        imgUrl: './img/legend/legend_zhili_gjdw.png',
        highlight: false,
        texthighlight: false,
        children: [],
      },
    ],
  },
];
