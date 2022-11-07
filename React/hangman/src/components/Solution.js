import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render() {
        return <div>
                    {this.props.solution.word.split("").map((l, index) => this.props.letterStatus[l]? <Letter key={index} letter={l}/> : <Letter key={index} letter={" _ "}/>)}
                    <div>
                        <em>{this.props.solution.hint}</em>
                    </div>
               </div>
            ;
    }
}

export default Solution;