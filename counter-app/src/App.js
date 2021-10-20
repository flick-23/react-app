import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';


class App extends Component {
  
  state = {
    counters:[
        {id:1, value:0},
        {id:2, value:1},
        {id:3, value:2},
        {id:4, value:3},
    ]
  };

  //STEP-1 add constructor
  constructor(props){    //called only once when instance of class is created
    super(props);    //we need to call constructor of parent class using super
    console.log("App-Constructor"); 
    // this.state = this.props.something;
  }
  //STEP -2 -this method is called after our component is rendered into the DOM - make Ajax calls to get data from the server
  componentDidMount(){
    //Ajax Calls 
    console.log("App-Mounted")
  }

  //handle the onDelete event here
  handleDelete = (counterId) =>{
    // console.log("Event handler called!",counterId);
    //filter the counters array to have values that are not equal to the id passed
    const newCounters = this.state.counters.filter(c=> c.id != counterId);
    //update the state of counters to the newCounters 
    //overwrite counters property with newCounters constant
    this.setState({counters: newCounters});
  };
  
  handleIncrement = counter =>{
    // console.log(counter)
    // do not update state directly instead create a new counters array and let react update the state
  
    //objects in new counters array will have same values 
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters:counters});
  }
  
  //creating new array of counters and set state
  handleReset = () =>{
    const newCounters = this.state.counters.map(c=>{
        c.value = 0;
        return c});
    this.setState({counters : newCounters});
  };
  
  //Step 3 - RENDER
  render(){
    console.log("App rendered!");
  return (
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c=> c.value>0).length} />
      <main className="container">
      {/* Raise events like onReset onDelete onIncrement */}
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </main>
   </React.Fragment>
  );
}
}

export default App;
