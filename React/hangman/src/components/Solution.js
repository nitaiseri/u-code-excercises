import React, { Component } from 'react';

class Solution extends Component {
    render() {
        return <div>
                    {new Array(4).fill().map((_, index) => <span key={index}>_ </span>)}
                        <div>
                            <em>Your ideal mood when coding.</em>
                        </div>
               </div>
            ;
    }
}

export default Solution;