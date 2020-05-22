import React, {Component} from 'react';
import styled from 'styled-components'

class Box extends Component {
    render() {
        let {family, text} = this.props
        text = text || "The fast fox jumped over the lazy dog"
        return (
            <StyledBox>
                <StyledTitle> {family} </StyledTitle>
                <StyledLine/>
                <StyledText {...this.props}> {text} </StyledText>
            </StyledBox>
        )
    }
}

// font-family, font-size, color, align, (text)
const StyledText = styled.div`
    @font-face {
        font-family: ${props => props.family};
        src: url(${props => props.fontUrl});
    }

    position: absolute;
    overflow: hidden;
    left: 5.85%;
    right: 5.85%;
    top: 30.27%;
    bottom: 5.95%;

    font-family: '${props => props.family}', 'Roboto' !important;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.fontSize?(props.fontSize[0]==="-"?"30px":props.fontSize):"30px"};
    text-align: ${props => props.align};

    color: ${props => props.color};

`

/// TODO: Box width, height만 변경하면 자동 조정되도록 만들자!
const StyledBox = styled.div`
    position: relative;
    box-sizing: border-box;
    border-radius: 28px;
    border: 1px solid black;
    background: white;
    
    width: 350px;
    height: 185px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 17px;
`
const StyledTitle = styled.div`
    position: absolute;
    left: 5.95%;
    right: 5.95%;
    top: 8.11%;
    bottom: 78.38%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: #000000;
`

const StyledLine = styled.div`
    position: absolute;
    left: 5.88%;
    right: 5.88%;
    top: 23.78%;
    bottom: 76.22%;

    border: 1px solid #000000;
`

Box.defaultProps = {
    text: "The fast fox jumped over the lazy dog",
    fontSize: "30px",
    color: "black",
    align: "start",
    family: "Dancing Script",
    fontUrl: "http://fonts.gstatic.com/s/dancingscript/v14/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSoHTeB9ptDqpw.ttf"
    // "http://fonts.gstatic.com/s/gothica1/v8/CSR94z5ZnPydRjlCCwl6bM0uQNJmvQ.ttf",
}

export default Box