import React, {Component} from 'react';
import styled from 'styled-components'
import { BlockPicker } from 'react-color'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {displayBlockPicker: false}
    }

    handleToggle = (e) => this.setState({displayBlockPicker: !this.state.displayBlockPicker})
    handleColor = (color) => this.props.handleInnerChange({color: color['hex']})

    render() {
        const {displayBlockPicker} = this.state
        const {color} = this.props
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            zIndex: 1,
          }
        return (
            <StyledColorBox>
                {displayBlockPicker?<div style={ cover } onClick={ this.handleToggle }/>:null}
                <StyledColor color={color} onClick={this.handleToggle}>
                {displayBlockPicker?
                    <StyledColorSelector>
                        <BlockPicker color={color} onChange={this.handleColor} />
                    </StyledColorSelector> :null}
                </StyledColor>
            </StyledColorBox>
        )
    }
}
const StyledColorBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    
    margin-left: 10px;
    padding-right: 10px;
    border-right: 1px solid black;
`

const StyledColor = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 6px;

    background-color: ${props => props.color || "black"};
`

const StyledColorSelector = styled.div`
    position: relative;
    top: 45px;
    left: -72px;
    z-index: 3;
`
export default ColorBox