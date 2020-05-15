import React, {Component} from 'react';

class DetailCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            button:''
        }
    }
    render() {
        return (
            <div className='mt-5'>
                <h5 className='button-state'>Button State</h5>
                <hr/>
                <span className='button-text'>{this.props.state}</span>
            </div>
        );
    }
}

export default DetailCounter;
