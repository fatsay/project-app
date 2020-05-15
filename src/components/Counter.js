import React, {Component} from 'react';
import CounterDetail from './DetailCounter';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            button:''
        }
    }
    increment =()=>{
        let value=this.state.count;
        this.setState({
            count:value+1,
            button:'Increment Button'
        })
    };
    decrement =()=>{
        let value=this.state.count;
        this.setState({
            count:value-1,
            button:'Decrement Button'
        })
    };
    render() {
        return (
            <div>
                <div>
                    <h5 className='counter'>Counter</h5>
                    <hr/>
                    <h6 className='current-count'>Current Count: {this.state.count}</h6>
                    <hr/>
                    <button
                        id='button-increase'
                        className='ui basic green button'
                        type="submit"
                        onClick={this.increment}
                    >
                        Increment Count
                    </button>
                    <hr/>
                    <button
                        id='button-decrease'
                        className='ui basic red button'
                        type="submit"
                        onClick={this.decrement}
                    >
                        Decrement Count
                    </button>
                </div>
                <div>
                    <CounterDetail state={this.state.button}/>
                </div>
            </div>
        );
    }
}

export default Counter;
