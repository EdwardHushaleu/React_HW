import React from 'react';

class Button extends React.Component {
    render() {
        return (
            // props с верху (потому  что это свойство)?
            <div>
                <button onClick={this.props.handler}>
                    Click
                </button>
                <div>
                    Clicks how mach {this.props.counter}
                </div>
            </div>
        )
    }
}
export default Button

