import React, { Component } from 'react';
import '../styles/icon.css';


class Icon extends Component {

    onClickFunction = () => {
        this.props.onClickIcon(this.props.movieId);
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