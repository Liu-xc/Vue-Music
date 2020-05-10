export default {
  togglePlayList (state) {
    state.showPlayList = !state.showPlayList
  },
  toggleBottomPlayer (state) {
    state.bottomPlayer = !state.bottomPlayer
  },
  changePlayMode (state) {
    state.playMode = state.playMode + 1 > 2 ? 0 : state.playMode + 1
  },
  delPlayList (state) {
    state.playList = []
  },
  togglePlayState (state) {
    state.playState = !state.playState
  },
  changeHomeRouter (state, router) {
    state.homeRouter = router
  }
}
