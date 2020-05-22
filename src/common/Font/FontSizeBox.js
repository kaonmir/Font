import React, {Component} from 'react';
import styled from 'styled-components'

class FontSizeBox extends Component {
    constructor(props) {
        super(props)
        this.state = { fontSize: this.props.fontSize}
        
    }

    handleFocus = (e) => e.target.select()
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        this.props.handleInnerChange({fontSize: this.state.fontSize + "px"})
        console.log();
        
    }

    render() {
        const {fontSize} = this.state
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
    width: 25px;
    border: none;

    font-size: 20px;

    &:active, &:focus {
        outline: none;
    }

`

export default FontSizeBox