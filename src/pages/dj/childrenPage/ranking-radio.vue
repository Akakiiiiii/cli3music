<template>
  <div class="pd23">
    <public-con v-show="!loading"
                title="最热电台"
                :data="djToplist"
                type="rank"
                :hotRank="true"></public-con>
    <page-loading v-show="loading"></page-loading>
  </div>
</template>

<script>
import publicCon from '../public'
import api from 'api'
import pageLoading from 'base/pageLoading'
export default {
  name: '',
  data () {
    return {
      djToplist: [],
      loading: true
    }
  },
  created () {
    this._getDjHotToplist()
  },
  methods: {
    _getDjHotToplist () {
      let limit, offset, type
      api.djHotToplistFn(limit, offset, type)
        .then(res => {
          const { data } = res
          if (data.code === 200) {
            console.log(data)
            this.djToplist = data.toplist
            this.loading = false
          }
        })
    }
  },
  components: {
    publicCon,
    pageLoading
  }
}
</script>

<style lang='less' scoped>
@import url("~styles/global.less");
</style>
