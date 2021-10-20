import React, { Component } from 'react';
class Counter extends Component {
    //deleted state property

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags(){
        if(this.state.tags.length == 0) return <p>There are no tags</p>;
        return (
        <ul>
        {this.state.tags.map(tag => <li key={tag} >{tag}</li>)}
        </ul>
        );
    }

    //binding the event handler
    //since there is no state object no more, there is no poin in having this.state! instead raise an event and let the parent control the data
    //therefore, removed handleIncrement 

    
    render() {
        console.log("Counter - Rendered!"); 
        let classes = this.getBadgeClasses(); 
        console.log('props.counter',this.props.counter);    //properties of the props obj
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            {/* update this the way we created delete button  */}
            <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>

            {/* Raise an event here called as onDelete */}
           {/* update prefix "id" with "counter.id" because id no more exists as it's replaced with whole counter obj */}
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-secondary btn-sm">Delete</button>
        </div>
        );
    }

    //removed the use of local state of the counter component
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.props.counter;
        return count ===0? "Zero" :count;
    }
}
 
export default Counter;