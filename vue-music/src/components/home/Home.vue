<template>
  <div>
    <top-search></top-search>
    <bottom-player></bottom-player>
  </div>
</template>

<script>
import TopSearch from 'comp/basic/TopSearch'
import BottomPlayer from 'comp/basic/BottomPlayer'

export default {
  name: 'Home',
  components: {
    TopSearch,
    BottomPlayer
  }
}
</script>

<style scoped>
</style>
