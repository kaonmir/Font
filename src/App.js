import React, { Component } from 'react';
import Font from './routes/Font'

import {BREAK_POINT_MOBILE} from './common/Font/Data/size'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {isPhone: window.innerWidth < BREAK_POINT_MOBILE? true: false}
    window.addEventListener('resize', this.checkPhone)
  }

  checkPhone = () => {
    if(window.innerWidth <= BREAK_POINT_MOBILE) this.setState({isPhone: true})
    else this.setState({isPhone: false})
    
  }

  render() {
    const {isPhone} = this.state
    return (
      <div className="App">
        <Font isPhone = {isPhone}/>
      </div>
    )
  }
}

export default App;
