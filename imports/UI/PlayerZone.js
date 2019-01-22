import React from 'react';
import CardZone from './CardZone';
import NameZone from "./NameZone";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {selectPlayerCards} from '../redux/cards/cardsSelectors.js'
import {selectPlaying} from '../redux/playing'


const playerZoneStyle={
    display: "grid",
    gridTemplateRown: "1fr 3fr",
    gridTemplateColumns: "1fr",
};


function PlayerZone({
    gridStyle,
    name,
    bot,
    upperPlayerCards,
    playerNumber,
    pause
}) {
        return (
            <div style={gridStyle}>
                <Paper style={playerZoneStyle}>
					{/* todo correct indentation here */}
					<NameZone name={name}
                              bot={bot}
                              style={{
                                  gridRow: "1 / 2",
                                  gridColumn: "1 / 2",
                              }}
                              />
                    <CardZone
                        pub={!bot}
                        pause={pause}
                        pileNumb={5}
                        playerNumber={playerNumber}
                        upperCards={upperPlayerCards}
                        gridStyle={{
                            gridColumn: "1 / 2",
                            gridRow: "2 / 3",
                        }}
                    />
                </Paper>
            </div>)


}

PlayerZone.propTypes={
     gridStyle: PropTypes.object.isRequired,
     name: PropTypes.string.isRequired,
     bot: PropTypes.bool.isRequired,

};



const mapStateToProps = (state, ownProps) => {
    return ({
        upperPlayerCards: selectPlayerCards(state, ownProps.playerNumber),
        pause: !selectPlaying(state)
    })
}

PlayerZone = connect(mapStateToProps, null)(PlayerZone)

export default PlayerZone
