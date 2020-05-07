export default {
  togglePalyList (state) {
    state.showPlayList = !state.showPlayList
  },
  toggleBottomPlayer (state) {
    state.bottomPlayer = !state.bottomPlayer
  },
  changePalyMode (state) {
    state.playMode = state.playMode + 1 > 2 ? 0 : state.playMode + 1
  },
  delPlayList (state) {
    state.playList = []
  }
}
