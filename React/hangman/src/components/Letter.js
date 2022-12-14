import React, { Component } from 'react';

class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
    }

    render() {
        return (
            <span onClick={this.selectLetter}>
                {this.props.letter}
            </span>
        );
    }
}

export default Letter;