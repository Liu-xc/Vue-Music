<template>
  <div class="play-list" v-show="showPlayList" :style="{bottom: bottomHeight}">
    <div class="list-header">
      <div class="play-mode">
        <span
          class="mode-icon iconfont"
          :class="modeInfo.mode_icon_class"
          @click.stop="handleChangeMode"
        ></span>
        <span class="mode-desc">{{modeInfo.desc}}</span>
      </div>
      <span class="del-icon iconfont icon-lajitong" @click.stop="handleDelClick"></span>
    </div>
    <div class="list-body">
      <ul class="list" v-if="playList === []">
        <li class="list-item" v-for="(item, index) of playList" :key="index">
          <div class="song-info">
            <span class="song-name">{{item.songName}}</span>
            <span class="song-singer">{{item.songSinger}}</span>
          </div>
          <span class="del-song iconfont icon-cha"></span>
        </li>
      </ul>
      <div class="no-list" v-else>暂无播放歌曲</div>
    </div>
    <div class="list-bottom" @click.stop="handleCancleClick">取消</div>
    <session-box v-if="needComfirm" @comfirmed="handleDeleteList" @cancle="handleDelCancle"></session-box>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { modeDesc } from '@/common/playmode.js'
import SessionBox from 'comp/basic/SessionBox'
export default {
  name: 'PlayList',
  data () {
    return {
      needComfirm: false
    }
  },
  computed: {
    ...mapGetters([
      'showPlayList',
      'bottomPlayer',
      'playList',
      'playMode'
    ]),
    bottomHeight () {
      return this.bottomPlayer ? '70px' : '0'
    },
    modeInfo () {
      return modeDesc[this.playMode]
    }
  },
  methods: {
    ...mapMutations([
      'delPlayList'
    ]),
    handleChangeMode () {
      this.$store.commit('changePlayMode')
    },
    handleCancleClick () {
      this.$store.commit('togglePlayList')
    },
    handleDelClick () {
      this.needComfirm = true
    },
    handleDeleteList () {
      this.delPlayList()
      this.needComfirm = false
    },
    handleDelCancle () {
      this.needComfirm = false
    }
  },
  components: {
    SessionBox
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.play-list
  position fixed
  bottom 0
  right 0
  left 0
  background $bg-white
  color $bg-dark-blue
  opacity 1
  z-index 100

  .list-header
    background $bg-green-l
    padding 0.25rem 0.3rem
    display flex
    justify-content space-between
    align-items center
    box-shadow 0 5px 10px $bg-dark-blue-ll

    .play-mode
      display flex
      align-items center

      .iconfont
        font-size $icon-size-large-x
        color $bg-dark-blue

      .mode-desc
        align-items center
        padding-left 0.1rem
        font-size $font-size-medium

  .list-body
    background $bg-green-l
    max-height 5.5rem
    min-height 2rem
    overflow scroll

    .no-list
      display flex
      padding 0.5rem
      justify-content center
      align-items center
      font-size $font-size-medium

    .list
      padding 0.02rem 0

      .list-item
        padding 0.2rem 0.35rem
        display flex
        justify-content space-between
        align-items center
        border-bottom $bg-green-ll solid 1px

        .song-info
          .song-name
            color $bg-dark-blue
            font-size $font-size-large

          .song-singer
            padding-left 0.1rem
            color $bg-dark-blue-ll
            font-size $font-size-medium-x

        .del-song
          font-size $font-size-medium-x
          color $bg-dark-blue

  .list-bottom
    background $bg-green-l
    padding 0.3rem
    color $bg-dark-blue
    font-size $font-size-medium-x
    text-align center
    box-shadow 0 -3px 10px $bg-green-l
</style>
