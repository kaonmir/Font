import React, {Component} from 'react';
import styled from 'styled-components'
import Select from 'react-select'
import options from './Data/options'

import { BREAK_POINT_MOBILE } from "./Data/size"

const stylesPC = {
    control: (provided) => ({
        ...provided,
        border: 0,
        width: "100px",
        height: "80%",
    }),
    menu: (provided, state) => ({
        ...provided, 
        width: "150px",
        fontSize: "13px",
    }),
}
const stylesMobile = {
    control: (provided) => ({
        ...provided,
        border: 0,
        width: "30px",
        height: "10px",
    }),
    menu: (provided, state) => ({
        ...provided, 
        width: "80px",
        fontSize: "13px",
    }),
}

class ChoiceBox extends Component {
    constructor(props) {
        super(props)
        const {title} = this.props
        const option = options[title]
        this.state = {
            title: title,
            option: option,
        }
        
    }
    handleChange = selected => this.props.handleInnerChange({[this.state.title]: selected['value']})        
    render() {
        const {title, option} = this.state
        const isPhone = window.innerWidth < 400
        return (
            <StyledSelectBox>
                <Select 
                    options={option}
                    components={{ DropdownIndicator:() => null }}
                    placeholder={title}
                    styles={isPhone? stylesMobile: stylesPC}
                    onChange={this.handleChange}
                />
            </StyledSelectBox>
        )
    }
}

const StyledSelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100px;
    border-right: 1px solid black;
    text-transform:capitalize;

    font-size: 20px;
    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px)  {
        font-size: 15px;
        width: 100px;
    }
`
export default ChoiceBox