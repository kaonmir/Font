import React, {Component} from 'react'
import styled, {css} from 'styled-components'

class Head extends Component {
    handleClick = () => window.location.reload()
    render() {
        const {isPhone} = this.props
        return( 
            <StyledHead isPhone={isPhone}>
                <StyledTitleBox isPhone={isPhone} onClick={this.handleClick}>
                    <StyledTitle isPhone={isPhone}>Kaonmir</StyledTitle>
                    <StyledName isPhone={isPhone}>font</StyledName>
                </StyledTitleBox>
            </StyledHead>
        )
    }
}

const StyledHead = styled.div`
    position: sticky;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    ${props => props.isPhone? 
         css `
            justify-content: center;
            height: 45px;
        `:
        css`
            justify-content: start;
            height: 53px;
        `
    }
    border-bottom: 1px solid black;
    text-align: center;
    background-color: white;
    z-index: 999;
`
const StyledTitleBox = styled.div`
    position: relative;
    height: 100%;
    width: ${props => props.isPhone?"214px":"243px"};
    margin: 0 20px 0 20px;
    cursor: pointer;
`
const StyledTitle = styled.div`
    @font-face {
        font-family: "Sansita";
        src: url("http://fonts.gstatic.com/s/sansita/v4/QldLNTRRphEb_-V7JKWUaXl0wqVv3_g.ttf");
    }
    font-size: ${props => props.isPhone? "45px":"50px"};
    position: absolute;
    font-family: "Sansita", sans-serif, "Robota";
    left: 0px;
    bottom: 0px;
`
const StyledName = styled.div`
    @font-face {
        font-family: "UnifrakturCook";
        src: url("http://fonts.gstatic.com/s/unifrakturcook/v11/IurA6Yli8YOdcoky-0PTTdkm56n05Uw13ILXs-h6.ttf");
    }
    ${props => props.isPhone? 
         css `
            font-size: 24px;
            bottom: 5px;
        `:
        css`
            font-size: 30px;
            bottom: 3px;
        `
    }
    right: 0px;
    position: absolute;
    font-family: "UnifrakturCook", sans-serif, "Robota";
`

export default Head 