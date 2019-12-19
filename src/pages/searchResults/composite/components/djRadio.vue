
<template>
  <list-global title="电台"
               :more="djRadio.more"
               :moreText="djRadio.moreText"
               linkPage="djRadio"
               :keyW="keyword">
    <list-con v-for="(item, index) in djRadio"
              @click.native="goDjDetailPage(item.id)"
              :key="index"
              :dj="true"
              maxWidth="4.7rem"
              line="one"
              :ImgUrl="item.picUrl"
              :name="item.name"
              :nicknames="item.dj"></list-con>
  </list-global>
</template>

<script>
import listGlobal from 'base/titleFooter'
import listCon from 'base/interchangeable'

export default {
  name: '',
  props: {
    djRadio: {
      type: Array
    },
    keyword: {
      type: String
    }
  },
  methods: {
    goDjDetailPage (id) {
      this.$router.push({ name: 'djDetailPage', params: { ridId: id } })
    }
  },
  components: {
    listGlobal,
    listCon
  }
}
</script>

<style lang='less' scoped>
</style>
