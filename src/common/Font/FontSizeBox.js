import React, {Component} from 'react';
import styled from 'styled-components'

import {BREAK_POINT_MOBILE} from './Data/size'

class FontSizeBox extends Component {
    fontStrToInt = (font) => parseInt(font.substring(0, font.length-2))
    handleFocus = (e) => e.target.select()
    handleChange = (e) => {
        let fontSize
        if(e.target.value === "") fontSize = "-1"
        else fontSize = e.target.value
        this.props.handleInnerChange({fontSize: fontSize+"px"})
    }

    render() {
        let fontSize = this.fontStrToInt(this.props.fontSize)
        if(fontSize < 0) fontSize = ""
        return (
            <StyledFontSizeBox>
                <StyledFontSize onChange={this.handleChange} value={fontSize} onFocus={this.handleFocus}/>
                <label> px</label>
            </StyledFontSizeBox>
        )
    }
}

const StyledFontSizeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    
    margin-left: 10px;
    padding-right: 10px;
    border-right: 1px solid black;
    
    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px)  {
        width: 70px;
        margin-left: 5px;
    }
`
const StyledFontSize = styled.input`
    width: 25px;
    border: none;
    font-size: 20px;

    &:active, &:focus {
        outline: none;
    }
`
export default FontSizeBox