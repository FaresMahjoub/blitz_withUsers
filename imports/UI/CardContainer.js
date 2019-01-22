import React from "react";
import PropTypes from 'prop-types';
import {cardClick} from '../redux/cards/cardsActions'
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import MaleIcon from './icons/maleIcon'
import FemaleIcon from './icons/femaleIcon'

const styles = {
    buttonBlue: {
        backgroundColor: 'blue !important',
    },
    buttonRed: {
        backgroundColor: 'red !important'
    },
    buttonGreen:{
        backgroundColor: 'green !important'
    },
    buttonYellow:{
        backgroundColor: 'yellow !important'
    },
    textBlack:{
        color:'black'
    },
    textWhite:{
        color:'white'
    }
};


function CardContainer({
    pubPile,
    color,
    sex,
    numb,
    pos,
    whenClicked,
    index,
    playerNumber,
    classes,
    pause,

}) {
    const verticalMargin=10 + 40 * Math.random();

    let buttonClasses, textClassName;

    switch (color) {
        case "blue":
            buttonClasses = {root: classes.buttonBlue, disabled: classes.buttonBlue};
            textClassName = classes.textWhite;
            break;
        case "red":
            buttonClasses = {root: classes.buttonRed, disabled: classes.buttonRed};
            textClassName = classes.textWhite;
            break;
        case "yellow":
            buttonClasses = {root: classes.buttonYellow, disabled: classes.buttonYellow};
            textClassName = classes.textBlack;
            break;
        case "green":
            buttonClasses = {root: classes.buttonGreen, disabled: classes.buttonGreen};
            textClassName = classes.textWhite;
            break;
        default:
            buttonClasses = {};
            textClassName = '';
            break;
    }

    return (
        <div style={{margin: `10px 10px`,width: "calc(100%*(1/10))"}}>
            <Button
                variant="contained"
                classes={buttonClasses}
                onClick={whenClicked}
                disabled={!pubPile || pause}
            >
                <h2 className={textClassName}>
                    {sex === 'M' && <MaleIcon/>}
                    {sex === 'F' && <FemaleIcon/>}
                    {!!numb && numb}
                </h2>

                {!numb && numb}

            </Button>
            {/*{color==='blue' ?*/}
                {/*<Button*/}
                    {/*variant="contained"*/}
                    {/*classes={{root: classes.buttonBlue, disabled: classes.buttonBlue}}*/}
                    {/*onClick={whenClicked}*/}
                    {/*disabled={!pubPile}*/}
                {/*>*/}
                    {/*<h2 className={classes.textWhite}>*/}
                        {/*<MaleIcon/> {numb}*/}
                    {/*</h2>*/}

                {/*</Button>*/}

                {/*: color==='red' ?*/}
                     {/*<Button*/}
                         {/*variant="contained"*/}
                         {/*classes={{root: classes.buttonRed, disabled: classes.buttonRed}}*/}
                         {/*onClick={whenClicked}*/}
                         {/*disabled={!pubPile}*/}
                     {/*>*/}
                         {/*<h2>*/}
                             {/*<MaleIcon/> {numb}*/}
                         {/*</h2>*/}
                     {/*</Button>*/}
                    {/*: color==='yellow' ?*/}
                        {/*<Button/}
                                {/*classes={{root: classes.buttonYellow, disabled: classes.buttonYellow}}*/}
                                {/*variant="contained"*/}
                                {/*onClick={whenClicked}*/}
                                {/*disabled={!pubPile}*/}
                        {/*>  <h2 className={classes.textBlack}> <FemaleIcon/> {numb}</h2> </Button> :*/}
                         {/*color === 'green' ?*/}
                             {/*<Button //style={{backgroundColor:'green',}}*/}
                                     {/*variant="contained"*/}
                                     {/*classes={{root: classes.buttonGreen, disabled: classes.buttonGreen}}*/}
                                     {/*onClick={whenClicked}*/}
                                     {/*disabled={!pubPile} >  <h2> <FemaleIcon/> {numb}</h2> </Button> :*/}
                             {/*<Button variant="contained" onClick={whenClicked} disabled={!pubPile} >  {numb} </Button>*/}
            {/*}*/}
        </div>
    )
}

CardContainer = withStyles(styles)(CardContainer)


const mapDispatchToProps = (dispatch, ownProps) => ({
        whenClicked: () => dispatch(cardClick({color: ownProps.color ,pos: ownProps.pos, sex: ownProps.sex, numb:ownProps.numb, index:ownProps.index, playerNumber: ownProps.playerNumber,}))
})

CardContainer = connect(null, mapDispatchToProps)(CardContainer)
export default CardContainer

CardContainer.propTypes={
    color: PropTypes.oneOf(['green','yellow','red','blue','']).isRequired,
    pubPile: PropTypes.bool.isRequired,
    sex: PropTypes.oneOf(['F','M','']).isRequired,
    numb: PropTypes.number.isRequired,

}
