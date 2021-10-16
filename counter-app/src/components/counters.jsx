import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {

    state = {
        counters:[
            {id:1, value:0},
            {id:2, value:1},
            {id:3, value:2},
            {id:4, value:3},
        ]
    };
    //handle the onDelete event here
    handleDelete = () =>{
        // console.log("Event handler called!");
    }

    render() { 
        return (<div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>
            </Counter>
            )}
        </div>);
    }
}
 
export default Counters;