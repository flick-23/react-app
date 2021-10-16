import React, { Component } from 'react';
class Counter extends Component {
    state = {
        // prefix "value" with "counter.id"
        count:this.props.counter.value,
        text:"Zero",
        tags:[]
    };

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
    handleIncrement = product => {
        // this.props.value = 0;  React does not allow to change properties of props object, this will throw error 
        console.log(product);
        this.setState({count: this.state.count+1})         //this tell react that there has been a change 
    }

    
    render() { 
        let classes = this.getBadgeClasses(); 
        console.log('props',this.props);    //properties of the props obj
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement(12)} className="btn btn-secondary btn-sm">Increment</button>
            {/* Raise an event here called as onDelete */}
           
           {/* update prefix "id" with "counter.id" because id no more exists as it's replaced with whole counter obj */}
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-secondary btn-sm">Delete</button>
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count } = this.state;
        return count ===0? "Zero" :count;
    }
}
 
export default Counter;