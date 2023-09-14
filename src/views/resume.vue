<template>
  <div class="jianjie">
    <div class="test">
      <CameraTree></CameraTree>
    </div>
  </div>
</template>

<script>
import CameraTree from '../components/CameraTree.vue';
export default {
  name: 'App',
  components: { CameraTree },
};
</script>
<style lang="less" scoped>
.jianjie {
  width: 100%;
  height: 700px;
  background: url('../assets/img/bg1.png');
  background-size: cover;
  .test {
    width: 800px;
    height: 500px;
    background-color: pink;
  }
}
</style>
