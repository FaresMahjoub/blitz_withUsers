import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {initialise, setCards} from "../redux/cards/cardsActions";
import {playPause} from "../redux/playing";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import {selectPlaying} from "../redux/playing";


function ButtonZone({
   gridStyle,
   onResetClick,
   onGiveCardsClick,
   onPause,
   playing,
}){
    const buttonZoneStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-around",
        alignContent: "space-between",
    }
    return(
        <Drawer
            style={gridStyle}
            anchor='left'
            open={true}
            variant='persistent'
        >
            <div style={buttonZoneStyle}>
                <Button variant="contained" onClick={onResetClick}>Reset</Button>
                <Button variant="contained" onClick={onGiveCardsClick}>Give cards</Button>
                <Button variant="contained" onClick={onPause}> {playing ? 'Pause' : 'Play'}</Button>
            </div>
        </Drawer>

    )

}

ButtonZone.porpTypes={
    gridStyle: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => ({
    onResetClick: () => dispatch(initialise()),
    onGiveCardsClick: () => dispatch(setCards()),
    onPause: () => dispatch(playPause())
});

const mapStateToProps = (state, ownProps) =>{
    return {
        playing: selectPlaying(state)
    }
}

ButtonZone = connect(mapStateToProps, mapDispatchToProps)(ButtonZone);

export default ButtonZone;