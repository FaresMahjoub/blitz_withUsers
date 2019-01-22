import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {initialise, setCards} from "../../redux/cards/cardsActions";
import {playPause} from "../../redux/playing";
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import {selectPlaying} from "../../redux/playing";
import {withStyles} from "@material-ui/core/styles";


const styles={
    drawerPaper: {
        position: "relative",
    }
}
function ButtonZone({
   gridStyle,
   onResetClick,
   onGiveCardsClick,
   onPause,
   playing,
   notLoggedIn,
   classes,
}){
    const drawerClasses = {
        paper: classes.drawerPaper,
    };
    const buttonZoneStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-around",
        alignContent: "space-between",
    }
    return(
        <Drawer
            style={gridStyle}
            classes={drawerClasses}
            anchor='left'
            open={true}
            variant='persistent'
        >
            <div style={buttonZoneStyle}>
                <Button variant="contained" disabled={notLoggedIn} onClick={onResetClick}>Reset</Button>
                <Button variant="contained" disabled={notLoggedIn} onClick={onGiveCardsClick}>Give cards</Button>
                <Button variant="contained" disabled={notLoggedIn} onClick={onPause}> {playing ? 'Pause' : 'Play'}</Button>
            </div>
        </Drawer>

    )

}

ButtonZone.porpTypes={
    gridStyle: PropTypes.object.isRequired,
}
ButtonZone = withStyles(styles)(ButtonZone)
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