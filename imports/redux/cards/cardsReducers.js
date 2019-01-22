
import {
    SET_CARDS,
    INITIALIZE,
    CLICK,
} from './cardsActions'

const cardsInMiddle = Array(16);
for (let i=0;i<16;i++){
    cardsInMiddle[i]={color:'',pos: 'm', sex: '', numb:0, index:i, playerNumb: 0, };
}

export const initialState={
    cardsInMiddle: cardsInMiddle,
    playerClicking:0,
    player1Data:{
        clicked:false,
        lastClicked:{color:'',pos: '', sex: '', numb:0, index:0},
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0, playerNumb: 1,}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0, playerNumb: 1,}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0, playerNumb: 1,}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0, playerNumb: 1,}),
        remainingStack: new Array(27).fill({color:'',pos: 'rem', sex: '', numb:0, playerNumb: 1,}),
    },
    player2Data:{
        clicked:false,
        lastClicked:{color:'',pos: '', sex: '', numb:0, index:0},
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0, playerNumb: 2,}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0, playerNumb: 2,}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0, playerNumb: 2,}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0, playerNumb: 2,}),
        remainingStack: new Array(27).fill({color:'',pos: 'rem', sex: '', numb:0, playerNumb: 2,}),    },
    player3Data:{
        clicked:false,
        lastClicked:{color:'',pos: '', sex: '', numb:0, index:0},
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0, playerNumb: 3,}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0, playerNumb: 3,}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0, playerNumb: 3,}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0, playerNumb: 3,}),
		remainingStack: new Array(27).fill({color:'',pos: 'rem', sex: '', numb:0, playerNumb: 3,}),    } ,
    player4Data:{
        clicked:false,
        lastClicked:{color:'',pos: '', sex: '', numb:0, index:0},
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0, playerNumb: 4,}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0, playerNumb: 4,}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0, playerNumb: 4,}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0, playerNumb: 4,}),
        remainingStack: new Array(27).fill({color:'',pos: 'rem', sex: '', numb:0, playerNumb: 4,}),    }
};

function initialiseR(){
    return initialState
}

function clickedR(state=initialState, action) {
    let stateObj = JSON.parse(JSON.stringify(state));
    let playerId;
    if (action.click1.playerNumber && action.click1.playerNumber !== 0) {
        playerId = `player${action.click1.playerNumber}Data`;
        stateObj.playerClicking = action.click1.playerNumber;
    } else {
        playerId = `player${stateObj.playerClicking}Data`;
    }
    if (['player1Data', 'player2Data', 'player3Data', 'player4Data',].includes(playerId)){
            if (stateObj[playerId].clicked === false) {
                stateObj[playerId].clicked = true;
                stateObj[playerId].lastClicked = action.click1;
                return stateObj
            } else {
                let click2 = action.click1;
                let click1 = stateObj[playerId].lastClicked;
                stateObj = moveR(stateObj, click1, click2);
                stateObj[playerId].lastClicked = click2;
                stateObj[playerId].clicked = false;
                return stateObj
            }
    }

}
//const validMovements=
function moveR(state=initialState, click1, click2){
    let stateObj=JSON.parse(JSON.stringify(state));
    if ((click2.color === click1.color && click2.numb === click1.numb-1)
        || (click1.numb===1 && click2.numb===0)
        || (click2.sex  !== click1.sex && click2.numb===click1.numb-1)
        || (click1.pos===click2.pos && click1.pos==='rem')
        || (click1.pos==='b' && ['ls','ms','rs'].includes(click2.pos)))
    {
        let playerId=`player${click1.playerNumber}Data`
        switch (click1.pos){
            case 'b':
                switch (click2.pos){
                    case 'm':
                        // the cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                        // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                        stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{pos:'m',index: click2.index}});
                        stateObj[playerId].nbCardsInMiddle=state[playerId].nbCardsInMiddle+1;
                        stateObj[playerId].blitzStack.pop();
                        break;
                    case 'ls':
                        stateObj[playerId].leftSexistStack.push({...click1, ...{pos:'ls'}});
                        stateObj[playerId].blitzStack.pop();
                        break;
                    case 'ms':
                        stateObj[playerId].middleSexistStack.push({...click1, ...{pos:'ms'}});
                        stateObj[playerId].blitzStack.pop();
                        break;
                    case 'rs':
                        stateObj[playerId].rightSexistStack.push({...click1, ...{pos:'rs'}});
                        stateObj[playerId].blitzStack.pop();
                        break;
                    default:
                }
                 break;
            case 'ls':
                // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                // (specific for tthe piles in the middle) thus needs to be added to cards coming to the middle
                stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{pos:'m',index: click2.index}})
                stateObj[playerId].nbCardsInMiddle=state[playerId].nbCardsInMiddle+1
                stateObj[playerId].leftSexistStack.pop()
                break;
            case 'ms':
                // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{pos:'m',index: click2.index}})
                stateObj[playerId].nbCardsInMiddle=state[playerId].nbCardsInMiddle+1
                stateObj[playerId].middleSexistStack.pop()
                break;
            case 'rs':
                // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{pos:'m',index: click2.index}})
                stateObj[playerId].nbCardsInMiddle=state[playerId].nbCardsInMiddle+1
                stateObj[playerId].rightSexistStack.pop()
                break;
            case 'rem':
                switch (click2.pos){
                    case 'm':
                        // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                        // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                        stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{index: click2.index}})
                        stateObj[playerId].nbCardsInMiddle=state[playerId].nbCardsInMiddle+1
                        stateObj[playerId].remainingStack.pop()
                        break;
                    case 'rem':
                        let len=stateObj[playerId].remainingStack.length
                        let last=stateObj[playerId].remainingStack[len-1]
                        let prelast=stateObj[playerId].remainingStack[len-2]
                        let beforePrelast=stateObj[playerId].remainingStack[len-3]
                        for (let i=len-1;i>=0;i--){
                            stateObj[playerId].remainingStack[i]=stateObj[playerId].remainingStack[i-3]
                        }
                        stateObj[playerId].remainingStack[0]=beforePrelast
                        stateObj[playerId].remainingStack[1]=prelast
                        stateObj[playerId].remainingStack[2]=last
                }
        }}
    return stateObj

}

const shuffle= deck=>{
    var newIndex, intermediateVariable, oldIndex;
    for (oldIndex = deck.length - 1; oldIndex > 0; oldIndex--) {
        newIndex = Math.floor(Math.random() * (oldIndex + 1));
        // shuffles the deck in a "insertion sort' way: the left side (from 0 to oldIndex) is shuffled and the new item is putted in a random place inside the suffled part
        intermediateVariable = deck[oldIndex];
        deck[oldIndex] = deck[newIndex];
        deck[newIndex] = intermediateVariable;
    }
    return deck;
}
function setCardsR(state=initialState, action){
    let stateObj=JSON.parse(JSON.stringify(state));
    for (let i=1; i<5;i++) {
        let deck=[{color:'blue',pos: '', sex: 'M', numb:1, playerNumb: 0,},
            {color:'green',pos: '', sex: 'F', numb:1, playerNumb: 0,},
            {color:'yellow',pos: '', sex: 'F', numb:1, playerNumb: 0,},
            {color:'red',pos: '', sex: 'M', numb:1, playerNumb: 0,},
        ];
        for (let i=2;i<11;i++){
            deck.push({color:'blue', pos: '', sex: 'M',numb: i, playerNumb: 0,});
            deck.push({color:'green',pos: '', sex: 'F', numb: i, playerNumb: 0,});
            deck.push({color:'yellow',pos: '', sex: 'F', numb:i, playerNumb: 0,});
            deck.push({color:'red',pos: '', sex: 'M', numb:i, playerNumb: 0,});
        }
        deck=shuffle(deck);
        const playerId = `player${i}Data`;
        const number={playerNumb:{i},};
        stateObj[playerId].leftSexistStack.push({...deck[deck.length - 1], ...{pos: 'ls'}, ...number});
        deck.pop();
        stateObj[playerId].middleSexistStack.push({...deck[deck.length - 1], ...{pos: 'ms'}, ...number});
        deck.pop();
        stateObj[playerId].rightSexistStack.push({...deck[deck.length - 1], ...{pos: 'rs'}, ...number});
        deck.pop();
        for (let i = 0; i < 10; i++) {
            stateObj[playerId].blitzStack[i] = {...deck[deck.length - 1], ...{pos: 'b'}, ...number};
            deck.pop()
        }
        stateObj[playerId].remainingStack = Object.assign([], deck.map(x => Object.assign(x, {pos: 'rem'})))
    }
    return stateObj
}

function cardsReducer(state=initialState, action) {
    switch (action.type) {
        case CLICK:
            return clickedR(state, action)

        case INITIALIZE:
            return initialiseR()

        case SET_CARDS:
            return setCardsR(initialiseR(), action)

        default:
            return state
    }
}

export default cardsReducer

