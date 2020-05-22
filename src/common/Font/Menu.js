import React, {Component} from 'react'
import styled from 'styled-components'
import FontSizeBox from './FontSizeBox'
import ColorBox from './ColorBox'
import ChoiceBox from './ChoiceBox'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            text: "",
            fontSize: 30,
            color: "#000000",

            language: {},
            categories: [],
        }
    }

    handleChange = (e) => { 
        this.setState({[e.target.name]: e.target.value})
        this.props.handleInnerChange(this.state)
    }
    handleInnerChange = (innerJson) => {
        this.setState(innerJson)
        this.props.handleInnerChange(innerJson)
    }

    render() {
        const {search, text, fontSize, color} = this.state
        return(
            <StyledMenu>
                <i className="fas fa-search"></i>
                <StyledSearch placeholder='Search' onChange={this.handleChange} name="search" value={search}/>
                <StyledSearch placeholder='Type Something' onChange={this.handleChange} name="text" value={text}/>
                <FontSizeBox fontSize={fontSize} handleInnerChange={this.handleInnerChange}/>
                <ColorBox color={color} handleInnerChange={this.handleInnerChange}/>
                <ChoiceBox title="Language" handleInnerChange={this.handleInnerChange}/>
                <ChoiceBox title="Categories" isMulti={true} handleInnerChange={this.handleInnerChange}/>
                <i className="fas fa-undo"></i>
            </StyledMenu>
        )
    }
}

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 70%;
    height: 45px;
    margin: 0 auto 50px auto;
    padding-left: 12px; 
    padding-right: 12px; 
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 90px;
`

const StyledSearch = styled.input`
    height: 80%;
    width: 200px;

    border: none;
    border-right: 1px solid black;
    margin-left: 10px;
    font-size: 20px;

    &:active, &:focus {
        outline: none;
    }
`

export default Menu