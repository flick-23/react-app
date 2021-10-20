import React, { Component } from 'react';
class Counter extends Component {
    // this method is called after the component is updated  
    componentDidUpdate(prevProps, prevState){
        //can make ajax req to get data from server
        console.log("PrevPros", prevProps);
        console.log("PrevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //ajax call and get new data from the server 
        }
    }

    //this method is called just before a component is unmounted
    //clean timers listeners etc using this, otherwise we will end up having memory leaks 
    componentWillUnmount(){
        console.log("Couter - Unmounted!");
    }

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
        <div className="row">
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                 {/* update this the way we created delete button  */}
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"> + </button>
                <button onClick={()=> this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value==0? 'disabled':''}
                > - </button>
                 {/* Raise an event here called as onDelete */}
                {/* update prefix "id" with "counter.id" because id no more exists as it's replaced with whole counter obj */}
                    <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-secondary btn-sm m-2">Delete</button>
            </div>
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