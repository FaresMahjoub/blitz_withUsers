
export const selectCardsInMiddle = state => state.cards.cardsInMiddle;

export function selectPlayerCards(state, playerNumber){
    const playercards=state.cards[`player${playerNumber}Data`];
    return [
            playercards.remainingStack[playercards.remainingStack.length-1],
            playercards.leftSexistStack[playercards.leftSexistStack.length-1],
            playercards.middleSexistStack[playercards.middleSexistStack.length-1],
            playercards.rightSexistStack[playercards.rightSexistStack.length-1],
            playercards.blitzStack[playercards.blitzStack.length-1],
    ]
}
