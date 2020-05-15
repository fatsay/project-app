import React, {Component} from 'react';
import Detail from './Details';
import faker from 'faker';
import Blog from './Blog'
import Counter from './Counter'
import Navbar from '../bootstrap/Navbar'

class Features extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[
                {avatar:faker.image.avatar(), author:faker.name.firstName(),date:faker.date.weekday(),text:faker.lorem.text() },
                {avatar:faker.image.avatar(), author:faker.name.firstName(),date:faker.date.weekday(),text:faker.lorem.text() },
                {avatar:faker.image.avatar(), author:faker.name.firstName(),date:faker.date.weekday(),text:faker.lorem.text() }
            ]
        }
    }
    BlogList=()=>{
        const list=this.state.list;
        return(
            <ul>
                {list.map((result)=>
                    <Blog key={result.author}>
                        <Detail
                            avatar={result.avatar}
                            author={result.author}
                            date={result.date}
                            text={result.text}/>
                    </Blog>
                )}
            </ul>
        )
    };
    render() {
        return (
            <div>
                <Navbar/>
                <div className='ui container comments'>
                    <div className='ui two column grid'>
                        <div className='row'>
                            <div id='blog-list' className='column'>
                                {this.BlogList()}
                            </div>
                            <div id='counter' className='column'>
                                <Counter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Features;
