import React, {Component} from 'react'
import styled from 'styled-components'
import FontSizeBox from './FontSizeBox'
import ColorBox from './ColorBox'
import ChoiceBox from './ChoiceBox'

class Menu extends Component {
    default_state = {
        search: "",
        text: "",
        fontSize: "30px",
        color: "#000000",

        language: "all",
        category: "all",
    }
    constructor(props) {
        super(props)
        this.state = this.default_state
    }
    handleReset = (e) => {
        this.setState(this.default_state)
        this.props.handleInnerChange(this.default_state)
    }
    handleChange = (e) => { 
        this.setState({[e.target.name]: e.target.value})
        this.props.handleInnerChange({[e.target.name]: e.target.value})
    }
    handleInnerChange = (innerJson) => {
        this.setState(innerJson)
        this.props.handleInnerChange(innerJson)
    }

    render() {
        const {search, text, fontSize, color, language, category} = this.state
        return(
            <StyledMenu>
                <i className="fas fa-search"></i>
                <StyledSearch placeholder='Search' onChange={this.handleChange} name="search" value={search}/>
                <StyledSearch placeholder='Type Something' onChange={this.handleChange} name="text" value={text}/>
                <FontSizeBox fontSize={fontSize} handleInnerChange={this.handleInnerChange}/>
                <ColorBox color={color} handleInnerChange={this.handleInnerChange}/>
                <ChoiceBox title="language" value={language} handleInnerChange={this.handleInnerChange}/>
                <ChoiceBox title="category" value={category} handleInnerChange={this.handleInnerChange}/>
                <StyledReset onClick={this.handleReset}><i className="fas fa-undo"></i></StyledReset>
            </StyledMenu>
        )
    }
}

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 800px;
    height: 45px;
    margin: 0 auto 50px auto;
    padding-left: 12px; 
    padding-right: 12px; 
    border: 1px solid #000000;
    border-radius: 90px;
`
const StyledSearch = styled.input`
    flex: 1;
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
const StyledReset = styled.div`
    margin-left: 10px;
    &:hover {
        color: #3a3a3a;
        cursor: pointer;
    }
`
export default Menu