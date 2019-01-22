import React from "react";
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';



class NameZone extends React.Component{
    constructor(props) {
        super(props)
        this.state={name:"My Name"}
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
            this.setState({
                name: event.target.value,
            });
        };

    render(){
        return (
            <div style={{display: "flex", justifyContent:"space-Evenly"}}>
                {this.props.bot ? <Chip label={this.props.name}/>:
                            <TextField label="Name" value={this.state.name} onChange={this.handleChange}/> }
                {this.props.bot && <button type="button" /*onClick={}*/ > Change Opponent </button>}
            </div>
        )
    }
}


NameZone.propTypes={
    name: PropTypes.string,
    bot: PropTypes.bool.isRequired,
};

export default NameZone