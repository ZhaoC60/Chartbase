<!--
 * @Author: 赵姐
 * @Date: 2023-10-19 16:51:44
 * @LastEditTime: 2023-10-19 17:04:17
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
-->
<template>
  <div class="jianli">
    <div class="iframeModal">
      <div class="modal-title">简历</div>
      <iframe src="./data/other/赵晓会-15136960887.pdf#view=FitH,top" class="iframeUrl"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.jianli {
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  background-color: pink;
  .iframeModal {
    iframe {
      width: 100%;
      height: 700px;
    }
  }
}
</style>
