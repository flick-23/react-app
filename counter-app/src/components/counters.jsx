import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {

    //removed the state and sent it to its parent component that is App
    render() { 
        return (<div>
                <button 
                // since handleReset and all are removed i must give reference to it using props
                onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
            {this.props.counters.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete} 
                // now also handle onIncrement
                onIncrement = {this.props.onIncrement}
                // removing id and value and instead adding the whole counter object so that if i add anything in the counter object in future it will automatically be added here
                counter={counter}
            />
            )}
        </div>);
    }
}
 
export default Counters;