<template>
  <div class="center">
    <p class="m3">当前未登录，请您跳转登陆页面进行登陆</p>
    <router-link to="/login">点我去登陆</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: '',
  methods: {
    ...mapMutations(['SHOW_LOGIN'])
  }
}
</script>

<style lang='less' scoped>
.center {
  text-align: center;
  .m3 {
    margin: 0.3rem 0;
  }
}
</style>
