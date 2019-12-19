<template>
  <div class="dynamic">
    <div class="data-info"
         v-show="!dataInfo">暂时还没有动态哦</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    dataInfo: {
      type: Boolean
    }
  }
}
</script>

<style lang='less' scoped>
.data-info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
}
</style>
