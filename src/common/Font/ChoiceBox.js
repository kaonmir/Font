import React, {Component} from 'react';
import styled from 'styled-components'
import Select from 'react-select'
import options from './Data/options'

const styles = {
    control: (provided) => ({
        ...provided,
        border: 0,
        width: "100px",
        height: "80%"
    }),
    menu: (provided, state) => ({
        ...provided, 
        width: "150px",
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
        return (
            <StyledSelectBox>
                <Select 
                    options={option}
                    components={{ DropdownIndicator:() => null }}
                    placeholder={title}
                    styles={styles}
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
`
export default ChoiceBox