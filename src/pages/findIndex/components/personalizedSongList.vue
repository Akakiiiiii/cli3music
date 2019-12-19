<template>
  <div class="wrapper pd23">
    <div class="title">
      <div class="recommended">推荐歌单</div>
      <router-link to="recommend"
                   tag="div"
                   class="square">歌单广场</router-link>
    </div>
    <page-loading style="height:5rem"
                  v-show="load"></page-loading>
    <div class="img-col"
         v-show="!load">
      <!-- 因为两个接口的属性名不同，这里使用了或 -->
      <img-card v-for="(item, index) in songList"
                :key="index"
                :imgUrl="item.picUrl || item.coverImgUrl"
                :dec="item.name"
                :playCount="item.playCount || item.playcount"
                :albumId="item.id"></img-card>
    </div>
  </div>
</template>

<script>
import api from 'api'
import imgCard from 'base/imgCard'
import pageLoading from 'base/pageLoading'
import { getRandomArrayElements } from 'utils/getRandomArrayElements'
import { mapGetters } from 'vuex'

export default {
  name: 'songList',
  data () {
    return {
      load: true,
      songList: [],
      isGetOver: false,
      list: []
    }
  },
  created () {
    this._getImgCard()
  },
  computed: {
    ...mapGetters({ loginState: 'LOGIN_STATE' })
  },
  methods: {
    /**
     * 获取推荐歌单的入口函数
     */
    _getImgCard () {
      let getFlag = +localStorage.getItem('loginState')
      if (this.loginState || getFlag) {
        // 用户已经登录
        const isGetOver = this.loadGetSongListInfo()
        this.isGetOver = isGetOver
      } else {
        const isGetOver = this.getSongListInfo()
        this.isGetOver = isGetOver
      }
    },
    reGetImgCard () {
      this.songList = getRandomArrayElements(this.list, 6)
    },
    /**
     * 在用户没有登陆的情况下随机取出6项进行展示
     */
    getSongListInfo () {
      api.recSongListFn().then(data => {
        data = data.data
        if (data.code === 200) {
          this.list = data.playlists
          this.songList = getRandomArrayElements(data.playlists, 6)
          this.load = false
        }
      })
    },
    /**
     * 在用户登陆情况下执行这个函数获取每日推荐歌单
     */
    loadGetSongListInfo () {
      api.dateRecSongListFn().then(data => {
        data = data.data
        if (data.code === 200) {
          const arr = data.recommend
          this.list = data.recommend
          this.songList = getRandomArrayElements(arr, 6)
          this.load = false
        }
      })
    }
  },
  components: {
    imgCard,
    pageLoading
  }
}
</script>

<style lang="less" scoped>
@import url("~styles/global.less");

.wrapper {
  .title {
    width: 100%;
    height: 1.2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    .recommended {
      font-size: 0.3rem;
      font-weight: 700;
    }
    .square {
      .smallTag();
      margin-left: auto;
    }
  }
  .img-col {
    .flex-between();
    flex-wrap: wrap;
  }
}
</style>
