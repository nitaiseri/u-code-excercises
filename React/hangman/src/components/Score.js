import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div className={this.props.class}>
                {this.props.score}
            </div>
        );
    }
}

export default Score;