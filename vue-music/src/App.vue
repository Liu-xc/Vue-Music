<template>
  <div id="app">
    <router-view />
    <play-list></play-list>
    <bottom-player v-show="bottomPlayer"></bottom-player>
  </div>
</template>

<script>
import PlayList from 'comp/basic/PlayList'
import BottomPlayer from 'comp/basic/BottomPlayer'
export default {
  name: 'App',
  components: {
    PlayList,
    BottomPlayer
  },
  computed: {
    bottomPlayer () {
      return this.$store.state.bottomPlayer
    }
  }
}
</script>

<style>
</style>
