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
        const {isMulti, title} = this.props
        this.state = {
            title: title,
            option: options[title],
            isMulti: isMulti,
        }
    }
    handleChange = selected => {
        if(this.state.isMulti) {
            let values = []
            for(let select of selected) values.push(select['value'])
            this.props.handleInnerChange({categories: values})            
        }
        else this.props.handleInnerChange({language: selected['value']})
    }
    render() {
        const {title, option, isMulti} = this.state
        return (
            <StyledSelectBox>
                <Select 
                    options={option}
                    components={{ DropdownIndicator:() => null }}
                    placeholder={title}
                    styles={styles}
                    isMulti={isMulti}
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
`
export default ChoiceBox