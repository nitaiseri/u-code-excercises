import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {
        let letters = []
        for (const [key, value] of Object.entries(this.props.letterStatus)) {
            if (!value){
                letters.push(key)    
            }
        }
        return (
            <div>
                <div>Available letters:</div>
                {letters.map((l, index) => <Letter selectLetter={this.props.selectLetter} key={index} letter={l}/>)}
            </div>
        );
    }
}

export default Letters;