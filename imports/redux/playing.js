

export const PLAY_PAUSE = "playPause"

export function playPause() {
    return ({type: PLAY_PAUSE})
}

export function playingReducer(state=false, action){
    return action.type === PLAY_PAUSE ? !state : state;
}

export const selectPlaying = state => state.playing;