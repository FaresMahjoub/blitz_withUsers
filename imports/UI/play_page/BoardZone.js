import React from 'react';
import CardContainer from "./CardContainer";
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import {selectCardsInMiddle} from "../../redux/cards/cardsSelectors"
import {selectPlaying} from "../../redux/playing";


const boardZoneStyle={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
}

function BoardZone ({
    gridStyle,
    pileNumb,
    upperCards,
    pub,
    pause,

}){
        let a=Array(pileNumb).fill(0)
        const cards=
            <div style={gridStyle}>
                    <Paper style={boardZoneStyle} >
                            { a.map((elt,index)=>{
                            return (
                                <CardContainer
                                    key={`board-zone-card-container-${index}`}
                                    pubPile={pub}
                                    pause={pause}
                                    color={upperCards[index].color}
                                    sex={upperCards[index].sex}
                                    numb={upperCards[index].numb}
                                    index={index}
                                    pos='m'
                                />
                            );
                    })}
                    </Paper>
            </div>
        return cards

}

const mapStateToProps = state => ({
    // upperCards: state.cardsInMiddle
    upperCards: selectCardsInMiddle(state),
    pause: ! selectPlaying(state)
});

BoardZone = connect(mapStateToProps, null)(BoardZone);

export default BoardZone;