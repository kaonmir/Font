import React, {Component} from 'react';
import styled from 'styled-components';
import Box from '../common/Font/Box';
import Menu from '../common/Font/Menu';

import {googleFontAPI} from '../private/private'

class Font extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            fonts: [],
            end: 27,
            
            search: "",
            text: "The fast fox jumped over the lazy dog",
            fontSize: "30px",
            color: "black",
            align: "start"
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        //TODO key값 서버로 숨기기
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key='+googleFontAPI)
        .then(res => res.json())
        .then(data => this.setState({fonts: data['items']}))
    }
    componentWillUnmount() {window.removeEventListener("scroll", this.handleScroll)}
    handleInnerChange = (innerJson) => this.setState(innerJson)
    
    createBoxs() {
        let result = []
        const default_font = {
            family: "Amatic SC",
            files: {'regular': "http://fonts.gstatic.com/s/amaticsc/v13/TUZyzwprpvBS1izr_vO0De6ecZQf1A.ttf"}
        }
        const state = this.state
        const textProps = {
            text: state.text,
            fontSize: state.fontSize,
            color: state.color,
            align: state.align
        }
        const { end, fonts } = this.state
        for(let i = 0; i < end; i++) {
            const font = fonts[i] || default_font
            result.push( 
                // text, fontSize, color, align, family, fontUrl
                <Box family={font['family']} fontUrl={font['files']['regular']} {...textProps}> </Box>
            )
        }
        return result
    }

    // 전체 Box의 개수가 유지되도록 만들고 싶지만 지금은 그냥 아래로 증가만 하게 한다.
    handleScroll = () => {
        const {innerHeight} = window
        const {scrollHeight} = document.body
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (scrollHeight - innerHeight - scrollTop < 100) {
            this.setState({end: this.state.end + 27})
            console.log("Almost!!")
        }
    }
    render() {
        return (
            <div>
                <Menu handleInnerChange={this.handleInnerChange}/>
                <StyledMain> 
                    {this.createBoxs()}
                </StyledMain>
            </div>
        )
    }
}

const StyledMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export default Font

