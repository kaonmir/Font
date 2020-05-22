import React, {Component} from 'react';
import styled from 'styled-components'

// FontSizeBox는 fontSize를 숫자로 관리한다.
class FontSizeBox extends Component {
    fontStrToInt = (font) => parseInt(font.substring(0, font.length-2))
    handleFocus = (e) => e.target.select()
    handleChange = (e) => this.props.handleInnerChange({[e.target.name]: e.target.value+"px"})

    render() {
        const fontSize = this.fontStrToInt(this.props.fontSize)
        return (
            <StyledFontSizeBox>
                <StyledFontSize onChange={this.handleChange} name="fontSize" value={fontSize} onFocus={this.handleFocus}/>
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
`
const StyledFontSize = styled.input`
    width: 30px;
    border: none;
    font-size: 20px;

    &:active, &:focus {
        outline: none;
    }
`
export default FontSizeBox