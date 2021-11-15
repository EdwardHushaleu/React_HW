import React from 'react';
import Button from "./button";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handClick = this.handClick.bind(this);
    this.state = { counter: 0 }
  }

  handClick() {
    this.setState({ counter: ++this.state.counter })
  }
  render() {
    return (
      <div>
        <Button
          //не понял эту часть
          handler={this.handClick}
          counter={this.state.counter}
        />
        {/* <Text
              
              /> */}
      </div>
    )
  }
}

export default Content