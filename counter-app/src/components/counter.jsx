import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0,
        text:"Zero",
        // imageUrl:"https://picsum.photos/200"
    };
    // style={
    //     fontSize:50,
    //     color:"red",
    //     fontWeight:"bold",
    // };
    render() { 
        return (
        <div>
            <span style={{
                fontSize:30,
            }} className="badge badge-secondary m-2">
                {this.state.text}
            </span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }
    formatCount(){
        const {count } = this.state;
        return count ===0? <h1>Zero</h1> :count;
    }
}
 
export default Counter;