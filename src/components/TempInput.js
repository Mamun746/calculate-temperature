import React, { Component } from 'react';

const scaleName={
    c:"Celsius",
    f:'Fahrenheit'
}

class TempInput extends Component {

    onChange=(e)=>{
        this.props.onHandleChange(e.target.value)
    }
   
    render() {
        const scale=this.props.scale
        const temperature=this.props.temperature
        return (
            <div>
                <label style={{fontSize:'20px',color:'green'}}>Inter Temperature in {scaleName[scale]}</label>
                <input className="form-control" value={temperature} onChange={this.onChange} />
            </div>
        );
    }
}

export default TempInput;