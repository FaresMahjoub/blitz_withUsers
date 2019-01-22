
export const MOVE= "card_move"
export const MOVE_3_CARDS= "move_3_cards"
export const SET_CARDS= "setCards"
export const INITIALIZE="initialise"
export const CLICK="click"


export function cardClick(click1){
    return({type: CLICK, click1})
}

export function initialise(){
    return ({type: INITIALIZE})
}

export function move3Cards(){
    return ({type: MOVE_3_CARDS})
}

export function setCards(){
    return ({type: SET_CARDS})
}
