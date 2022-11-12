import React, { Component } from 'react';

class Icon extends Component {

    onClickFunction = () => {
        this.props.onClickFunc(this.props.movieId);
    }

    render() {
        return (
            <div className='icon'>
                <this.props.icon onClick={this.onClickFunction}/>
            </div>
        );
    }
}

export default Icon;