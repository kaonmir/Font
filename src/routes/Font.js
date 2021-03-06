import React, {Component} from 'react';
import styled from 'styled-components';
import Box from '../common/Font/Box';
import Menu from '../common/Font/Menu';

import fetch from "node-fetch"
import Head from '../common/Font/Head';

class Font extends Component {
    default_fonts
    constructor(props) {
        super(props)
        
        this.state = { 
            fonts: [],
            language: "all",
            category: "all",
            end: 27,
            
            search: "",
            text: "The fast fox jumped over the lazy dog",
            fontSize: "30px",
            color: "black",
            align: "start",
        }        
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        fetch('http://font.kaonmir.xyz/api')
        .then(res => res.json())
        .then(data => {
            this.setState({fonts: data['items']})
            this.default_fonts = data['items']
        })
    }
    componentWillUnmount() {window.removeEventListener("scroll", this.handleScroll)}
    handleInnerChange = (innerJson) => {
        this.setState(innerJson)
        
        if(innerJson.language || innerJson.category || innerJson.search !== undefined)
        {
            let fonts = this.default_fonts
            const language = innerJson.language || this.state.language
            const category = innerJson.category || this.state.category
            const search = innerJson.search === undefined? this.state.search: innerJson.search
            
            if(category && category !== "all") fonts = fonts.filter(value => value['category'] === category)
            if(language && language !== "all") fonts = fonts.filter(value => value['subsets'].includes(language))
            if(search && search !== "") fonts = fonts.filter(value => value['family'].toLowerCase().includes(search.toLowerCase()))
            
            this.setState({fonts: fonts, end: 27})
        }
    }
    
    createBoxs() {
        let result = []
        const state = this.state
        const textProps = {
            text: state.text,
            fontSize: state.fontSize,
            color: state.color,
            align: state.align
        }
        let { end, fonts } = this.state
        if(end > fonts.length) end = fonts.length
        for(let i = 0; i < end; i++) {
            const font = fonts[i]
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
        if (scrollHeight - innerHeight - scrollTop < 100) this.setState({end: this.state.end + 27})
    }
    render() {
        const {isPhone} = this.props
        return (
            <div>
                <Head isPhone={isPhone}/>
                <Menu isPhone={isPhone} handleInnerChange={this.handleInnerChange}/>
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
    width: 100%;
`
export default Font

