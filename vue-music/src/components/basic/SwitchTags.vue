<template>
  <div class="switch">
    <span v-for="(item, index) of tags" :key="index" @click.stop="handleSwitchClick(item)">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'SwitchTags',
  data () {
    return {
      tags: ['推荐', '排行', '歌手']
    }
  },
  methods: {
    handleSwitchClick (title) {
      this.$router.push({
        path: `/${title}`
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/var.styl'

.switch
  height $switch-height
  background $bg-green
  display flex
  justify-content space-evenly
  align-items center
  font-size $font-size-large
</style>
