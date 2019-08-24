import React, { Component } from 'react';
import TempInput from './TempInput'

function toCelsius(fahrenheit){
    return (fahrenheit-32) * 5 / 9
}
function toFahrenheit(celsius){
    return (celsius * 9/ 5)+32
}

function tryConvert(temperature,convert){
    const inputTemp=parseFloat(temperature)
    if(Number.isNaN(inputTemp)){
        return ''
    }
    const outputTemp=convert(inputTemp)
    const rounded=Math.round(outputTemp * 1000) / 1000
    return rounded.toString()
}

class CalculateTemp extends Component {

    state={
        temperature:'',
        scale:''
    }
    onCelsiusTempChange=(temperature)=>{
        this.setState({
            scale:'c',
            temperature
        })
    }

    onFahrenheitTempChange=(temperature
        )=>{
        this.setState({
            scale:'f',
            temperature
        })
    }
    render() { 
        const temperature=this.state.temperature;
        const scale=this.state.scale
        const celsius=scale=='f'?tryConvert(temperature,toCelsius):temperature
        const fahrenheit=scale=='c'?tryConvert(temperature,toFahrenheit):temperature
        return (
            <div>
              <TempInput scale='c' temperature={celsius} onHandleChange={this.onCelsiusTempChange}/>  
              <TempInput scale='f' temperature={fahrenheit} onHandleChange={this.onFahrenheitTempChange}/>  
            </div>
        );
    }
}

export default CalculateTemp;