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
    handleDelete = (counterId) =>{
        // console.log("Event handler called!",counterId);
        //filter the counters array to have values that are not equal to the id passed
        const newCounters = this.state.counters.filter(c=> c.id != counterId);
        //update the state of counters to the newCounters 
        //overwrite counters property with newCounters constant
        this.setState({counters: newCounters});
    };

    //creating new array of counters and set state
    handleReset = () =>{
        const newCounters = this.state.counters.map(c=>{
            c.value = 0;
            return c});
        this.setState({counters : newCounters});
    };

    render() { 
        return (<div>
                <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
            {this.state.counters.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                // removing id and value and instead adding the whole counter object so that if i add anything in the counter object in future it will automatically be added here
                counter={counter}
            />
            )}
        </div>);
    }
}
 
export default Counters;